import BookingForm from "./BookingForm";
import {motion} from 'framer-motion'
import logo_text from '../../assets/logo_text.png'

export default function Hero() {
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
      className="p-2 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="rounded-2xl flex flex-col items-center text-center px-4 h-full w-full min-h-screen">
        <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mt-10 font-inconsolata text-white mb-7"
          >
            <img src={logo_text} alt="" />
          </motion.h1>
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mt-24 font-inconsolata text-white mb-7"
          >
            Let's Plan Your<br />Perfect Journey
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-100 mb-12 text-lg md:text-xl"
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
