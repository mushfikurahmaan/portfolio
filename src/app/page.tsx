import { AgeCounter } from "@/components/AgeCounter";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="page-container">
      <div className="content-box">
        <section className="section-row">
          <div className="section-content">
            <p className="name-display">{profile.name}</p>
          </div>
        </section>

        <section className="section-row">
          <div className="section-content age-content">
            <AgeCounter />
          </div>
        </section>

        <section className="section-row">
          <div className="section-content">
            <p className="bio-text">{profile.bio}</p>
          </div>
        </section>

        <section className="section-row">
          <div className="section-content">
            <p className="tech-list">{profile.techStacks}</p>
          </div>
        </section>

        <section className="section-row">
          <div className="section-content">
            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="link-text">
                mail me
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                leave a message
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
