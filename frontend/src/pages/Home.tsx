import React, { useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import bg_light from "../assets/main_bg_light.jpg";
import bg_dark from "../assets/main_bg_dark.jpg";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Function to update dark mode state
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Observe changes to the classList of <html> to detect dark mode toggling
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen p-3 overflow-x-hidden overflow-y-auto">
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{ backgroundImage: `url(${isDarkMode ? bg_dark : bg_light})` }}
      >
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default Home;
