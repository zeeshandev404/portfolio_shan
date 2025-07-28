
import ContactForm from '../components/ContactForm';
import { Fade, Zoom } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[#212121] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <Fade direction="left" duration={800} triggerOnce className="flex-1">
            <div className="bg-[rgba(255,255,255,0.08)] rounded-xl border border-[rgba(255,255,255,0.1)] backdrop-blur-lg p-8 h-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's <span className="text-[#ffc506]">Talk</span>
              </h2>
              <p className="text-lg mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#ffc506]/20 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#ffc506]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span>zeeshan.developer404@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#ffc506]/20 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#ffc506]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <span>+923001051112</span>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="right" duration={800} triggerOnce className="flex-1">
            <div className="bg-[rgba(255,255,255,0.08)] rounded-xl border border-[rgba(255,255,255,0.1)] backdrop-blur-lg p-8 w-full">
              <ContactForm accentColor="#ffc506" />
            </div>
          </Fade>
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

export default Contact;