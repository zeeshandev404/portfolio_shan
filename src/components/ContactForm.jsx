// ContactForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="bg-gradient-to-br from-[#0d102b] to-[#1a1f4d] rounded-2xl p-1 shadow-lg">
        <div className="bg-[#0d102b] rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-white">
            <span className="text-[#ffc506]">Send</span> a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                required
                placeholder=" "
                className="w-full px-4 py-3 bg-[#0d102b] border-b-2 border-gray-600 focus:border-[#ffc506] outline-none text-white transition-all"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                required
                placeholder=" "
                className="w-full px-4 py-3 bg-[#0d102b] border-b-2 border-gray-600 focus:border-[#ffc506] outline-none text-white transition-all"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                required
                placeholder=" "
                className="w-full px-4 py-3 bg-[#0d102b] border-b-2 border-gray-600 focus:border-[#ffc506] outline-none text-white transition-all"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300">
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                placeholder=" "
                rows="4"
                className="w-full px-4 py-3 bg-[#0d102b] border-b-2 border-gray-600 focus:border-[#ffc506] outline-none text-white transition-all"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-300">
                Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-6 bg-[#ffc506] text-[#0d102b] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;