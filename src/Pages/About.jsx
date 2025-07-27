// About.jsx
import { useState } from "react";
import SN from '../assets/about.png';
import TrueFocus from "../Components/TrueFocus";
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const accentColor = "rgb(255, 197, 6)"; // Golden yellow

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-[#212121] text-white p-4 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-pulse"></div>
            
            <Fade direction="top" delay={0} duration={1000} triggerOnce>
                <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                    About <span className="text-[#ffc506]" style={{ textShadow: '0 0 10px rgba(255,197,6,0.5)' }}>Me</span>
                </h1>
            </Fade>
            
            <Zoom delay={500} duration={1000} triggerOnce>
                <div className="relative mb-8 group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc506] to-[#ffdd66] blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                    <img
                        src={SN}
                        alt="Profile"
                        className="relative z-10 border-4 border-[#ffc506]/30 h-[33vh] rounded-full mx-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </Zoom>
            
            <Fade direction="up" delay={700} duration={1000} triggerOnce>
                <div className="text-3xl font-bold mb-6 text-[#ffc506]">
                    <TrueFocus
                        sentence="React Developer"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#ffc506"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>
            </Fade>
            
            <Fade delay={1000} duration={1000} direction="up" triggerOnce>
                <div className="max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl leading-relaxed">
                        I'm a React front-end developer with a Bachelor's degree in Computer Science...
                        {isExpanded && (
                            <span className="block mt-4">
                                I am skilled in designing intuitive user experiences with modern technologies. 
                                My expertise includes building responsive web applications with React, 
                                Tailwind CSS, and various JavaScript libraries.
                            </span>
                        )}
                    </p>
                    
                    <Zoom delay={1500} duration={500} triggerOnce>
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-8 bg-[#ffc506] hover:bg-[#ffd633] text-[#0d102b] font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                            <span className="ml-2">↓</span>
                        </button>
                    </Zoom>
                </div>
            </Fade>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-[#ffc506]/20"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>
            
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    100% { transform: translateY(-100vh) rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default About;