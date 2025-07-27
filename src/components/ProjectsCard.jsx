import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const ProjectsCard = ({ title, description, imageUrl, technologies, links }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#ffc506]/10 text-[#ffc506] dark:bg-[#ffc506]/20"
            >
              <Icon icon={tech.icon} className="mr-1" />
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:shadow-md`}
              style={{ backgroundColor: link.color }}
            >
              <Icon icon={link.icon} className="mr-2" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;