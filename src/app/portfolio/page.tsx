import { profile } from "@/data/profile";

export default function PortfolioPage() {
  const nameLower = profile.name.toLowerCase();
  return (
    <>
      <h1 className="greeting">my portfolio.</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        a simple snapshot of who i am, what i&apos;ve built, and what i&apos;m good at. comming soon.
      </p>

    </>
  );
}
