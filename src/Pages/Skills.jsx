import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({
    codingSkills: [],
    professionalSkills: []
  });

  const skillData = {
    codingSkills: [
      { name: 'CSS', value: 80 },
      { name: 'Tailwind CSS', value: 60 },
      { name: 'JavaScript', value: 70 },
      { name: 'Chakra UI', value: 80 },
      { name: 'React JS', value: 75 },
      { name: 'Rest APIs', value: 70 },
      { name: 'Ant Design', value: 70 },
    ],
    professionalSkills: [
      { name: 'Web Design', value: 60 },
      { name: 'Web Development', value: 80 },
      { name: 'Landing Page', value: 80 },
      { name: 'Responsive Design', value: 80 },
      { name: 'Figma', value: 70 },
    ],
  };

  useEffect(() => {
    // Animate coding skills
    const codingTimer = setTimeout(() => {
      setAnimatedSkills(prev => ({
        ...prev,
        codingSkills: skillData.codingSkills
      }));
    }, 300);

    // Animate professional skills with slight delay
    const professionalTimer = setTimeout(() => {
      setAnimatedSkills(prev => ({
        ...prev,
        professionalSkills: skillData.professionalSkills
      }));
    }, 600);

    return () => {
      clearTimeout(codingTimer);
      clearTimeout(professionalTimer);
    };
  }, []);

  const SkillBar = ({ name, value, color }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(value);
      }, 100);
      return () => clearTimeout(timer);
    }, [value]);

    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-white font-medium">{name}</span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#ffc506] font-bold"
          >
            {width}%
          </motion.span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
              delay: 0.2
            }}
            className="h-2.5 rounded-full"
            style={{ background: `linear-gradient(90deg, #ffc506, #ffdd66)` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-[#212121] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" id="skills">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#ffc506]/10"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Fade direction="down" duration={800} triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-[#ffc506]" style={{ textShadow: '0 0 15px rgba(255,197,6,0.5)' }}>Skills</span>
            </h1>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#ffc506] to-[#ffdd66] mx-auto rounded-full"></div>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Technologies I work with and my proficiency levels
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Zoom delay={300} duration={800} triggerOnce>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(255,255,255,0.1)] p-8 backdrop-blur-lg shadow-lg hover:shadow-[#ffc506]/20 transition-all"
            >
              <h2 className="text-2xl font-bold mb-8 text-center text-white">
                <span className="text-[#ffc506]">Technical</span> Skills
              </h2>
              {animatedSkills.codingSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  value={skill.value} 
                />
              ))}
            </motion.div>
          </Zoom>

          <Zoom delay={600} duration={800} triggerOnce>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(255,255,255,0.1)] p-8 backdrop-blur-lg shadow-lg hover:shadow-[#ffc506]/20 transition-all"
            >
              <h2 className="text-2xl font-bold mb-8 text-center text-white">
                <span className="text-[#ffc506]">Professional</span> Skills
              </h2>
              {animatedSkills.professionalSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  value={skill.value} 
                />
              ))}
            </motion.div>
          </Zoom>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Skills;