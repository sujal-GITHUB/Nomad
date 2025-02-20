import DarkModeToggle from "../DarkModeToggle";
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
      className="sticky top-0 flex items-center justify-center rounded-b-3xl w-[50%] px-6 
                 bg-white dark:bg-black backdrop-blur-md py-1 z-50 
                 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-evenly w-full rounded-b-2xl font-inconsolata font-semibold md:flex py-3 space-x-7">
        {["Home", "About", "Destination", "Tours", "Login"].map((item) => (
          <motion.a
            key={item}
            href="#"
            className="relative group transition-colors duration-300"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ color: "var(--text-color)" }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--text-color)] transition-all group-hover:w-full"></span>
          </motion.a>
        ))}
        <DarkModeToggle />
      </div>
    </motion.nav>
  );
}
