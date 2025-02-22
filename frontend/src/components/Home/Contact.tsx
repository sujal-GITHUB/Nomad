import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    // Reset form after submission
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-3xl dark:from-purple-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-700/30 dark:bg-purple-800/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gray-700/30 dark:bg-indigo-700/10 blur-3xl"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent text-lg font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2 
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            We're Here to <span className="dark:text-purple-400 text-black">Help</span>
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have questions about your next adventure? Our travel experts are ready to assist you
            with anything you need to make your journey unforgettable.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info Panel */}
          <motion.div 
            className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <ul className="space-y-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="dark:bg-purple-900/50 bg-gray-300 p-3 rounded-lg mr-4">
                  <Phone className="text-indigo-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="dark:text-gray-400 text-gray-700">+1 (555) 123-4567</p>
                  <p className="dark:text-gray-400 text-gray-700">Mon-Fri 9AM-6PM</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="dark:bg-purple-900/50 bg-gray-300 p-3 rounded-lg mr-4">
                  <Mail className="text-indigo-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="dark:text-gray-400 text-gray-700">support@nomadtravel.com</p>
                  <p className="dark:text-gray-400 text-gray-700">24/7 digital support</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="dark:bg-purple-900/50 bg-gray-300 p-3 rounded-lg mr-4">
                  <MapPin className="text-indigo-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Office</h4>
                  <p className="dark:text-gray-400 text-gray-700">123 Adventure Way</p>
                  <p className="dark:text-gray-400 text-gray-700">Traveler's District, CA 90210</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="dark:bg-purple-900/50 bg-gray-300 p-3 rounded-lg mr-4">
                  <MessageSquare className="text-indigo-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Live Chat</h4>
                  <p className="dark:text-gray-400 text-gray-700">Available 24/7 via the app</p>
                  <p className="dark:text-gray-400 text-gray-700">Response time: ~5 minutes</p>
                </div>
              </motion.li>
            </ul>
            
            <div className="mt-10">
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href={`#${social}`}
                    className="dark:bg-purple-900/50 bg-gray-300 p-3 rounded-full text-black dark:text-purple-400 hover:bg-gray-500 dark:hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 flex items-center justify-center">
                      {/* You would add actual social icons here */}
                      {social.charAt(0).toUpperCase()}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white/5 backdrop-blur-lg rounded-2xl p-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 
                text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 
                text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 
                text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="How can we help you?"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 
                text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="Tell us about your travel plans or questions..."
                />
              </motion.div>
              
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r cursor-pointer from-gray-800 to-gray-600 dark:from-purple-500 dark:to-indigo-600 text-white px-8 py-4 rounded-full flex items-center font-bold shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        
        {/* Map or Additional Information Section */}
        <motion.div 
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-4 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-16 aspect-h-7 rounded-xl overflow-hidden">
            {/* Map placeholder - in a real implementation you would integrate with a map service */}
            <div className="w-full h-full p-3 bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-indigo-600 dark:text-purple-400 mb-3" />
                <p className="text-gray-300 text-lg">Interactive Map Loading...</p>
                <p className="text-gray-400 text-sm mt-2">Find our offices and recommended travel agencies worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* FAQ Teaser */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Check out our comprehensive FAQ section or contact our support team.
          </p>
          <motion.a
            href="#faq"
            className="inline-block border border-gray-400 dark:border-purple-500 text-gray-300 dark:text-purple-400 hover:bg-gray-500 dark:hover:bg-purple-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All FAQs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}