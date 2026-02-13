import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

function getClientIp(headersList: Awaited<ReturnType<typeof headers>>): string {
  const forwarded = headersList.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = headersList.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

async function getViewsPath(): Promise<string> {
  const base = process.env.VERCEL ? "/tmp" : process.cwd();
  const dir = path.join(base, "data");
  try {
    await mkdir(dir, { recursive: true });
  } catch {
    // dir may already exist
  }
  return path.join(dir, "views.json");
}

type ViewData = { ips: string[] };

async function readViewData(): Promise<ViewData> {
  try {
    const filePath = await getViewsPath();
    const raw = await readFile(filePath, "utf-8");
    const data = JSON.parse(raw) as ViewData;
    return Array.isArray(data.ips) ? data : { ips: [] };
  } catch {
    return { ips: [] };
  }
}

async function writeViewData(data: ViewData): Promise<void> {
  const filePath = await getViewsPath();
  await writeFile(filePath, JSON.stringify(data, null, 0), "utf-8");
}

export async function GET() {
  const headersList = await headers();
  const ip = getClientIp(headersList);

  if (!ip || ip === "unknown") {
    return NextResponse.json({ count: 0 });
  }

  const data = await readViewData();
  const seen = new Set(data.ips);
  if (!seen.has(ip)) {
    data.ips.push(ip);
    await writeViewData(data).catch(() => {});
  }

  return NextResponse.json({ count: data.ips.length });
}
