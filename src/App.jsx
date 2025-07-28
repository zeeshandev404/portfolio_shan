import React from "react";
import { Fade } from "react-awesome-reveal";
import HeroSection from './components/HeroSection';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#212121]">
      <Header />
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section id="home" className="snap-start ">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="snap-start">
          <Fade duration={1000} triggerOnce>
            <About />
          </Fade>
        </section>

        {/* Projects Section */}
        <section id="projects" className="snap-start">
          <Fade duration={1000} triggerOnce>
            <Projects />
          </Fade>
        </section>

        {/* Skills Section */}
        <section id="skills" className="snap-start">
          <Fade duration={1000} triggerOnce>
            <Skills />
          </Fade>
        </section>

        {/* Contact Section */}
        <section id="contact" className="snap-start">
          <Fade duration={1000} triggerOnce>
            <Contact />
          </Fade>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;