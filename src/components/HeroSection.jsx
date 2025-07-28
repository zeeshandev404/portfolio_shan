import React, { useState, useEffect } from "react";
import SH from '../assets/shan.png';
import { Icon } from "@iconify/react";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import CVButton from "./CVButton";
import myCV from '../assets/resume.pdf';

const HeroSection = () => {
  const [stats, setStats] = useState([
    { value: 0, label: "Projects Delivered" },
    { value: 0, label: "Happy Clients" },
    { value: 0, label: "Years Experience" },
    { value: 0, label: "GitHub Repos" }
  ]);

  const finalStats = [25, 18, 3, 42]; // Your actual stats

  // Social media links
  const socialLinks = [
    { 
      icon: "cib:github", 
      label: "GitHub",
      url: "https://github.com/zeeshandev404",
      color: "hover:bg-gray-700"
    },
    { 
      icon: "tabler:brand-vercel", 
      label: "Vercel",
      url: "https://vercel.com/muhammad-zeeshan-ranas-projects",
      color: "hover:bg-black"
    },
    { 
      icon: "cib:linkedin", 
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-zeeshan-rana-a31646311/",
      color: "hover:bg-blue-600"
    }
  ];

  const skills = [
    "I'm a frontend React developer skilled in building landing pages with Tailwind CSS.",
    "Experienced in GitHub version control and API integration.",
    "I create dynamic, responsive web interfaces efficiently."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => prevStats.map((stat, index) => {
        if (stat.value < finalStats[index]) {
          return { ...stat, value: stat.value + 1 };
        }
        return stat;
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#212121] text-white w-full min-h-screen flex flex-col justify-center snap-start pt-20 lg:pt-0" id="home">
      <style jsx>{`
        @keyframes bubble {
          0%, 100% {
            transform: translateX(0) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 197, 6, 0.7);
          }
          25% {
            transform: translateX(-8px) scale(1.03);
            box-shadow: -12px 0 20px rgba(255, 197, 6, 0.6);
          }
          50% {
            transform: translateX(8px) scale(1.03);
            box-shadow: 12px 0 20px rgba(255, 197, 6, 0.6);
          }
          75% {
            transform: translateX(-8px) scale(1.03);
            box-shadow: -12px 0 20px rgba(255, 197, 6, 0.6);
          }
        }
        
        .bubble-effect:hover {
          animation: bubble 0.6s infinite ease-in-out;
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-5 w-full h-full relative overflow-hidden pt-16 md:pt-0">
        {/* Background decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ffc506]/10 blur-3xl z-0 transition-all duration-500 hover:bg-[#ffc506]/20"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#ffc506]/10 to-[#ffdd66]/10 blur-3xl z-0 transition-all duration-500 hover:opacity-50"></div>
        
        {/* Text Content - Left Side */}
        <div className="text-center lg:text-left flex-1 z-10 px-4 order-2 lg:order-1">
          <Fade direction="top" duration={1000} delay={0} triggerOnce>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-nerko drop-shadow-lg mt-8 md:mt-0">
              Hey, I AM ZEESHAN RANA
            </h1>
          </Fade>

          <Fade direction="top" duration={1000} delay={500} triggerOnce>
            <div className="text-3xl font-bold mt-2 text-[#ffc506]">
              <Typewriter
                options={{
                  strings: ["I'm a React Developer", "FrontEnd React Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  cursor: "|",
                  pauseFor: 2000,
                }}
              />
            </div>
          </Fade>

          <Fade direction="top" duration={1000} delay={1000} triggerOnce>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mt-4 mx-auto lg:mx-0 space-y-2">
              {skills.map((skill, index) => (
                <p key={index} className="flex items-start">
                  <span className="text-[#ffc506] mr-2">▹</span>
                  {skill}
                </p>
              ))}
            </div>
          </Fade>

          <Fade direction="left" duration={1500} delay={1000} triggerOnce>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              <CVButton 
                name="DOWNLOAD CV" 
                file={myCV} 
                fileName="Zeeshan-Rana-Frontend-Developer-CV.pdf" 
                color="#ffc506"
              />
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border border-white/30 text-white p-2 rounded transition-colors duration-300 ${link.color} hover:text-white`}
                    title={link.label}
                    aria-label={link.label}
                  >
                    <Icon icon={link.icon} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        {/* Image with enhanced bubble effect - Right Side */}
        <Fade direction="right" duration={1500} delay={1000} triggerOnce>
          <div className="flex-1 max-w-sm w-full mt-4 lg:mt-0 relative z-10 px-4 mb-8 lg:mb-0 order-1 lg:order-2">
            <div className="relative bubble-effect">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#ffc506]/30 to-[#ffdd66]/30 blur-xl opacity-70 hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-[#ffc506] to-[#ffdd66] z-10 overflow-hidden">
                <img
                  src={SH}
                  alt="Zeeshan Rana"
                  className="w-full h-auto object-cover rounded-full border-4 border-[#212121] transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Stats Section with Vertical Dividers */}
      <div className="bg-[#2a2a2a] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {/* Vertical dividers - only visible on md screens and up */}
            <div className="hidden md:block absolute h-16 top-1/2 -translate-y-1/2 left-1/4 w-px bg-[#ffc506]/30"></div>
            <div className="hidden md:block absolute h-16 top-1/2 -translate-y-1/2 left-2/4 w-px bg-[#ffc506]/30"></div>
            <div className="hidden md:block absolute h-16 top-1/2 -translate-y-1/2 left-3/4 w-px bg-[#ffc506]/30"></div>
            
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 relative">
                <div className="text-3xl md:text-4xl font-bold text-[#ffc506]">
                  {stat.value}+
                </div>
                <div className="text-white/80 text-sm md:text-base mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;