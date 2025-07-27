import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" }
  ];

  // Native smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#212121]/90 backdrop-blur-md shadow-lg" : "bg-[#212121]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            onClick={() => scrollToSection("home")}
            className="text-3xl font-bold text-white font-nerko hover:text-[#ffc506] transition-colors"
          >
           <span className="text-[#ffc506] text-5xl">S</span>HAN
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeSection === link.id
                  ? "bg-[#ffc506] text-[#212121] font-bold shadow-md"
                  : "text-white hover:text-[#ffc506] hover:bg-[#ffc506]/10"
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-white"
          aria-label="Open menu"
        >
          <Icon icon="mdi:menu" width={28} height={28} />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black z-40 md:hidden"
              />
              
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 w-72 h-screen bg-[#212121] z-50 shadow-2xl p-6 flex flex-col"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="self-end mb-8 bg-[#ffc506] text-[#212121] rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <Icon icon="mdi:close" width={20} height={20} />
                </motion.button>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <button
                        onClick={() => {
                          scrollToSection(link.id);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-lg transition-colors ${
                          activeSection === link.id
                            ? "bg-[#ffc506] text-[#212121] font-bold"
                            : "text-white hover:bg-[#ffc506]/20"
                        }`}
                      >
                        {link.name}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pt-8 border-t border-[#ffc506]/20">
                  <div className="flex gap-4 justify-center">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://github.com/zeeshandev404"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#ffc506]/10 flex items-center justify-center hover:bg-[#ffc506]/20"
                    >
                      <Icon icon="mdi:github" color="white" width={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://vercel.com/muhammad-zeeshan-ranas-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#ffc506]/10 flex items-center justify-center hover:bg-[#ffc506]/20"
                    >
                      <Icon icon="file-type-light-vercel" color="white" width={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://www.linkedin.com/in/muhammad-zeeshan-rana-a31646311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#ffc506]/10 flex items-center justify-center hover:bg-[#ffc506]/20"
                    >
                      <Icon icon="mdi:linkedin" color="white" width={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;