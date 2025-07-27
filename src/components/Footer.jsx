import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/zeeshandev404" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffc506] transition-colors">
            <Icon icon="cib:github" width={24} height={24} />
          </a>
          <a href="https://vercel.com/muhammad-zeeshan-ranas-projects" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffc506] transition-colors">
            <Icon icon="file-type-light-vercel" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-zeeshan-rana-a31646311/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffc506] transition-colors">
            <Icon icon="cib:linkedin" width={24} height={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Zeeshan Rana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;