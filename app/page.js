
import AboutMe from "./sections/AboutMe";
// import Certificates from "./sections/Certificates";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import MyStrength from "./sections/MyStrength";
import Contactme from "./sections/Contactme";



export default function Home() {
  return (
    <main className="">
      <section className="padding">
        <Intro />
      </section>
      <section className="padding">
        <AboutMe />
      </section>
      <section className="padding">
        <MyStrength />
      </section>
      <section className="padding">
        <Skills />
      </section>
      {/* <section className="padding">
        <Certificates />
      </section> */}
      <section className="padding">
        <Projects />
      </section>
      <section className="padding">
        <Contactme />
      </section>
    </main>
  )
}
