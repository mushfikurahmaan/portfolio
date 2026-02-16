import { AgeCounter } from "@/components/AgeCounter";
import { PostCard } from "@/components/PostCard";
import { profile, featuredPost } from "@/data/profile";

export default function Home() {
  const nameLower = profile.name.toLowerCase();
  return (
    <>
      <h1 className="greeting">hi i&apos;m {nameLower}.</h1>

      <p>{profile.tagline}</p>
      <p>
        been here since <AgeCounter variant="yearsDecimal" /> years.
      </p>
      <p>{profile.bio}</p>
      <p>
        want to <a href={`mailto:${profile.email}`}>work with me</a>? you can also{" "}
        <a href="/hi">find me</a> + view my{" "}
        <a href="/portfolio">portfolio</a>.
      </p>


      <p>
        i build things on the web and like to keep it simple. when i&apos;m not coding, i&apos;m
        probably reading or exploring new tools.
      </p>
      <p style={{ marginTop: "1.5rem" }}>
        p.s. if you wanna contact me, <a href={`mailto:${profile.email}`}>email</a>.
      </p>
    </>
  );
}
