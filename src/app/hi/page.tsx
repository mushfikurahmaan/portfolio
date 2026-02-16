import Link from "next/link";
import { profile } from "@/data/profile";

export default function HiPage() {
  const { links, email, whatsapp } = profile;
  return (
    <>
      <h1 className="greeting">find me</h1>
      <p style={{ marginBottom: "1rem" }}>
        say hi. find me on the internet.
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li style={{ marginBottom: "0.5rem" }}>
          <a href={links.x} target="_blank" rel="noopener noreferrer">
            x (twitter)
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <a href={links.medium} target="_blank" rel="noopener noreferrer">
            medium
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">
            facebook
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <a href={`mailto:${email}`}>email</a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            whatsapp
          </a>
        </li>
      </ul>
    </>
  );
}
