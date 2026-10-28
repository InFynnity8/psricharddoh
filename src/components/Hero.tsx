import { profile, stats } from "../data";
import { BookIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./Icons";

export function SocialButtons() {
  return (
    <>
      <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noopener">
        <LinkedInIcon /> LinkedIn
      </a>
      <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noopener">
        <GitHubIcon /> GitHub
      </a>
      <a className="btn btn-ghost" href={profile.links.ieee} target="_blank" rel="noopener">
        <BookIcon /> IEEE Xplore
      </a>
    </>
  );
}

export default function Hero() {
  return (
    <>
      <header className="hero" id="top">
        <div className="wrap">
          <img className="portrait" src={profile.photo} alt={`Portrait of ${profile.name}`} />
          <div>
            <div className="eyebrow">{profile.eyebrow}</div>
            <h1>{profile.name}</h1>
            <div className="role">{profile.role}</div>
            <p className="lead">{profile.lead}</p>
            <div className="meta">
              <span>
                <PinIcon /> {profile.location}
              </span>
              <span>
                <MailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
              <span>
                <MailIcon /> <a href={`mailto:${profile.academicEmail}`}>{profile.academicEmail}</a>
              </span>
            </div>
            <div className="btns">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <MailIcon /> Get in touch
              </a>
              <SocialButtons />
            </div>
          </div>
        </div>
      </header>

      <div className="stats">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
