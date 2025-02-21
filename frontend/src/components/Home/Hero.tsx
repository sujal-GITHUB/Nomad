import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { motion } from 'framer-motion'
import logo_text from '../../assets/logo_text.png'
import log_text_dark from '../../assets/logo_text_dark.png'
import Navbar from "./Navbar";

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="p-2 min-h-screen rounded-t-3xl relative bg-gradient-to-b from-gray-500 via-gray-300 to-gray-500 
                 dark:from-indigo-950 dark:via-purple-950 dark:to-indigo-950"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    ><div className="flex justify-center">
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black dark:bg-white/"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#D6CFFF] dark:bg-indigo-600 blur-3xl"
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
            className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[#F7CFFF] dark:bg-purple-600 blur-3xl"
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
      </div>
      <div className="rounded-2xl flex flex-col items-center text-center px-4 h-full w-full min-h-screen">
        <motion.h1
          variants={itemVariants}
          className="text-gray-900 dark:text-white text-5xl md:text-6xl font-bold mt-10 font-manrope mb-7"
        >
          <motion.img 
            src={isDarkMode ? log_text_dark : logo_text} 
            alt="Nomad Logo"
            className="mt-15 w-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-[#1A1A1A] dark:text-white text-5xl md:text-6xl font-semibold mt-24 font-manrope mb-7"
          >
            Let's Plan Your<br />Perfect Journey
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#555555] dark:text-gray-100 mb-12 text-lg md:text-xl"
          >
            Plan and book your perfect trip with expert advice, travel tips, destination<br />
            information, and inspiration from us.
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
