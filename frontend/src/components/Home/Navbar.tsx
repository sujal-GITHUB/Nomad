import DarkModeToggle from "../ui/DarkModeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const linkVariants = {
    hover: {
      scale: 1.05,
      originX: 0,
      transition: { duration: 0.3, ease: "easeOut" }, // Smooth scaling effect
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" }, // Natural tap effect
    },
  };

  return (
    <motion.nav
      className="fixed mt-10 top-0 flex items-center justify-center rounded-3xl w-[50%] px-6 
                 bg-white/50 dark:bg-indigo-900/50 backdrop-blur-md py-1 z-50 
                 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-evenly w-full rounded-b-2xl font-manrope font-md md:flex py-3 space-x-7">
        {["Home", "About", "Destination", "Tours", "Login"].map((item) => (
          <motion.a
            key={item}
            href="#"
            className="relative group transition-colors text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 duration-300"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
          </motion.a>
        ))}
        <DarkModeToggle />
      </div>
    </motion.nav>
  );
}
