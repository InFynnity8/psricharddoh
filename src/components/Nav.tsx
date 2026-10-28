import { useState } from "react";
import { profile } from "../data";
import { MenuIcon } from "./Icons";

const items = [
  ["about", "About"],
  ["publications", "Publications"],
  ["research", "Research"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="wrap">
        <a href="#top" className="brand">
          {profile.shortName}
        </a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
        <ul className={`nav-links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {items.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
