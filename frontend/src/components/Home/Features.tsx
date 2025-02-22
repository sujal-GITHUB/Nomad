import { motion } from 'framer-motion';
import { Plane, Train, Bus, Hotel, Map, CreditCard, Users, Search, Navigation, Compass } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-indigo-600 dark:text-indigo-400 mb-4 p-3 bg-gray-300 dark:bg-indigo-900 rounded-full"
        whileHover={{ 
          rotate: 15, 
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const features = [
    {
      icon: <Plane size={24} />,
      title: "All-in-One Transport Search",
      description: "Find and compare flights, trains, and buses from any source to destination with smart sorting options."
    },
    {
      icon: <Hotel size={24} />,
      title: "Accommodation Finder",
      description: "Discover hotels, homestays, and unique lodging options tailored to your preferences and budget."
    },
    {
      icon: <Compass size={24} />,
      title: "AI Travel Guide",
      description: "Personalized recommendations for attractions and activities based on your interests and travel style."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Expense Tracker",
      description: "Keep track of all your travel expenses in one place with automatic currency conversion."
    },
    {
      icon: <Navigation size={24} />,
      title: "Real-time Journey Tracking",
      description: "Follow your journey with live updates, maps, and important alerts about your itinerary."
    },
    {
      icon: <Users size={24} />,
      title: "Group Expense Splitting",
      description: "Easily split travel costs among friends and family with built-in Splitwise-like functionality."
    },
    {
      icon: <Map size={24} />,
      title: "Interactive Destination Maps",
      description: "Explore interactive maps with hidden gems, popular spots, and custom routes for your adventures."
    },
    {
      icon: <Search size={24} />,
      title: "AI-Powered Search",
      description: "Find exactly what you need with our context-aware search that learns your preferences over time."
    },
  ];

  return (
    <section className="pt-24 pb-5  bg-gradient-to-b from-gray-500 to-gray-300 dark:from-indigo-950 dark:to-purple-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-indigo-400 dark:bg-indigo-600 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-400 dark:bg-purple-600 blur-3xl"></div>
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
            className="bg-gradient-to-r from-gray-300 to-gray-200 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent text-lg font-semibold tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            DISCOVER THE POSSIBILITIES
          </motion.span>
          <motion.h2 
            className="mt-2 text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Everything You Need for the <span className="text-black dark:text-indigo-400">Perfect Journey</span>
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nomad brings together all your travel needs in one powerful platform, 
            combining intelligent recommendations with practical tools.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r cursor-pointer from-gray-700 to-gray-500 dark:from-purple-500 dark:to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 "
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}