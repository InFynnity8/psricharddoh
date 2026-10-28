import Hero from "./components/Hero";
import Nav from "./components/Nav";
import {
  About,
  Certifications,
  Community,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Publications,
  Research,
  Skills,
} from "./components/Sections";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Publications />
        <Research />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Skills />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
