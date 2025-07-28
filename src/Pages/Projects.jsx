import ProjectsCard from "../components/ProjectsCard";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import GN from '../assets/gaming.png';
import GM from '../assets/ayyangym.png';
import TD from '../assets/todoapp.png';
import PP from '../assets/property.png';
import WP from '../assets/weather.png';
import NC from '../assets/netflix.png';
import PRT from '../assets/parts.png';

const Projects = () => {
  const projects = [
{
      title: "Netflix Clone",
      description: "Streaming service clone with movie browsing, trailers, and user profiles.",
      imageUrl: NC,
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Firebase", icon: "logos:firebase" },
        { name: "TMDB API", icon: "simple-icons:themoviedatabase" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://stream-flix-api-clone.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "GitHub", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/stream-flix-clone", 
          color: "#333" 
        }
      ]
    },

    {
      title: "Gaming Landing Page",
      description: "Responsive landing page for gaming products with modern UI design and animations.",
      imageUrl: GN,
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Framer Motion", icon: "logos:framer" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://gaming-project-three.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "GitHub", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/Gaming-Project", 
          color: "#333" 
        }
      ]
    },
    {
      title: "Gym Landing Page",
      description: "Fitness center website with class schedules, trainer profiles, and membership options.",
      imageUrl: GM,
      technologies: [
        { name: "HTML", icon: "vscode-icons:file-type-html" },
        { name: "CSS", icon: "vscode-icons:file-type-css" },
        { name: "JavaScript", icon: "logos:javascript" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://ayyan-gym.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "Github", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/ayyan-gym", 
          color: "#333" 
        }
      ]
    },
    
    {
      title: "Property Landing Page",
      description: "Real estate website with property listings, search filters, and contact forms.",
      imageUrl: PP,
      technologies: [
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Chakra UI", icon: "simple-icons:chakraui" },
        { name: "Mapbox", icon: "logos:mapbox" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://landing-property-plum.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "GitHub", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/Landing-property", 
          color: "#333" 
        }
      ]
    },
    {
      title: "Parts App",
      description: "E-commerce platform for auto parts with shopping cart and payment integration.",
      imageUrl: PRT,
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Node.js", icon: "logos:nodejs" },
        { name: "MongoDB", icon: "logos:mongodb" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://parts-app-two.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "GitHub", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/parts-app", 
          color: "#333" 
        }
      ]
    },
    {
      title: "Weather App",
      description: "Weather forecasting application with location detection and 5-day forecasts.",
      imageUrl: WP,
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "OpenWeather API", icon: "simple-icons:openweathermap" },
        { name: "Geolocation API", icon: "mdi:map-marker-radius" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://weather-app-iota-ten-76.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "GitHub", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/weather-app", 
          color: "#333" 
        }
      ]
    },
    
    {
      title: "ToDo App",
      description: "Task management application with drag-and-drop functionality and local storage.",
      imageUrl: TD,
      technologies: [
        { name: "React", icon: "logos:react" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Firebase", icon: "logos:firebase" }
      ],
      links: [
        { 
          label: "Live Demo", 
          icon: "mdi:web", 
          url: "https://redux-todo-five-mu.vercel.app/", 
          color: "#3B82F6" 
        },
        { 
          label: "GitHub", 
          icon: "mdi:github", 
          url: "https://github.com/zeeshandev404/redux-todo", 
          color: "#333" 
        },
      ]
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#ffc506]/10"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Fade direction="down" duration={800} triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              My <span className="text-[#ffc506]" style={{ textShadow: '0 0 10px rgba(255,197,6,0.3)' }}>Projects</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#ffc506] mx-auto rounded-full"></div>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Here are some of my featured works with modern technologies
            </p>
          </div>
        </Fade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Zoom 
              key={index} 
              delay={index * 100} 
              duration={800} 
              triggerOnce
            >
              <ProjectsCard {...project} />
            </Zoom>
          ))}
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

export default Projects;