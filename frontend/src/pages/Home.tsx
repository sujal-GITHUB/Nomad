import React, { useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Top from "../components/ui/Top";
import Features from "../components/Home/Features";
import Contact from "../components/Home/Contact";

const Home = () => {
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

  return (
    <div className="relative w-full min-h-screen p-3 bg-black  overflow-x-hidden overflow-y-auto transition-colors duration-500">
      <div className="relative z-10">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Hero />
        <Features/>
        <Contact/>
        <span className="right-0 bottom-0 fixed cursor-pointer">
          <Top/>
        </span>
      </div>
    </div>
  );
};

export default Home;
