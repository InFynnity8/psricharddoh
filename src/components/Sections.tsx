import {
  about,
  certifications,
  education,
  experience,
  facts,
  hobbies,
  interests,
  profile,
  projects,
  publications,
  research,
  skills,
  volunteering,
  workshops,
  type ListEntry,
} from "../data";
import { SocialButtons } from "./Hero";
import { AwardIcon } from "./Icons";
import Section, { SectionHead } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Profile">
      <div className="about-grid">
        <div>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="interests spaced">
            {interests.map((i) => (
              <span className="chip" key={i}>
                {i}
              </span>
            ))}
          </div>
        </div>
        <aside>
          <div className="side-card">
            <h3>At a glance</h3>
            <ul className="facts">
              {facts.map(([k, v]) => (
                <li key={k}>
                  <span>{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="side-card">
            <h3>Beyond work</h3>
            <p>{hobbies}</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export function Publications() {
  return (
    <Section id="publications" eyebrow="Peer-reviewed work" title="Publications" alt>
      {publications.map((p) => (
        <div className="pub" key={p.href}>
          <div className="ieee">IEEE</div>
          <div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
          <a className="btn" href={p.href} target="_blank" rel="noopener">
            View on IEEE &rarr;
          </a>
        </div>
      ))}
      <p className="note">
        Full author profile:{" "}
        <a href={profile.links.ieee} target="_blank" rel="noopener">
          {profile.links.ieee.replace("https://", "")}
        </a>
      </p>
    </Section>
  );
}

export function Research() {
  return (
    <Section id="research" eyebrow="Research experience" title="Research Projects">
      <div className="cards three">
        {research.map((r) => (
          <article className="card" key={r.title}>
            <div className="tag">{r.tag}</div>
            <h3>{r.title}</h3>
            <div className="date">{r.date}</div>
            <ul>
              {r.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Professional Experience" alt>
      <div className="timeline">
        {experience.map((r) => (
          <div className={`tl-item${r.current ? " current" : ""}`} key={r.title + r.date}>
            <div className="tl-top">
              <h3>
                {r.title}
                {r.current && <span className="badge">Current</span>}
              </h3>
              <span className="tl-date">{r.date}</span>
            </div>
            <div className="tl-org">{r.org}</div>
            <ul>
              {r.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Academic background" title="Education">
      {education.map((d) => (
        <div className="edu" key={d.title}>
          <div className="yr">{d.year}</div>
          <div>
            <h3>{d.title}</h3>
            <div className="sch">{d.school}</div>
            <div className="d">{d.detail}</div>
          </div>
        </div>
      ))}
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Applied work" title="Selected Projects" alt>
      <div className="cards two">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <div className="tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <div className="date">{p.date}</div>
            <p>{p.description}</p>
            {p.link && (
              <a className="link" href={p.link.href} target="_blank" rel="noopener">
                {p.link.label} &rarr;
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c.name}>
            <div className="ic">
              <AwardIcon />
            </div>
            <div>
              <b>{c.name}</b>
              <small>{c.issuer}</small>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills" alt>
      <div className="skills-grid">
        {skills.map((g) => (
          <div className="card" key={g.title}>
            <h3>{g.title}</h3>
            <div className="interests">
              {g.items.map((s) => (
                <span className="chip plain" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function MiniList({ entries }: { entries: ListEntry[] }) {
  return (
    <ul className="mini-list">
      {entries.map((e) => (
        <li key={e.title}>
          <div>
            <b>{e.title}</b>
            <br />
            {e.detail}
          </div>
          <span className="r">{e.date}</span>
        </li>
      ))}
    </ul>
  );
}

export function Community() {
  return (
    <section id="community">
      <div className="wrap">
        <div className="cards two">
          <div>
            <SectionHead eyebrow="Continuous learning" title="Workshops" />
            <MiniList entries={workshops} />
          </div>
          <div>
            <SectionHead eyebrow="Giving back" title="Volunteering" />
            <MiniList entries={volunteering} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <SectionHead eyebrow="Contact" title="Let's collaborate" />
        <p className="tagline">{profile.tagline}</p>
        <p>
          Open to research collaborations, academic positions, peer-review invitations and AI projects in healthcare,
          security and education. References are available on request.
        </p>
        <div className="btns">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.academicEmail}`}>
            {profile.academicEmail}
          </a>
          <SocialButtons />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} {profile.name} &middot; {profile.location}
    </footer>
  );
}
