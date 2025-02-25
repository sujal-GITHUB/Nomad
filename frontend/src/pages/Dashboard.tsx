import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FloatingDock } from "../components/ui/floating-dock";
import Home from "../components/Dashboard/Home"
import Profile from "../components/Dashboard/Profile";
import Settings from "../components/Dashboard/Settings";

import {
  IconHome,
  IconUser,
  IconSettings,
  IconCompass,
  IconWallet,
  IconMap,
} from "@tabler/icons-react";

const Dashboard = () => {
  const navigationItems = [
    {
      title: "Overview",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard",
    },
    {
      title: "Profile",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard/profile",
    },
    {
      title: "Trips",
      icon: <IconCompass className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard/trips",
    },
    {
      title: "Expenses",
      icon: <IconWallet className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard/expenses",
    },
    {
      title: "Maps",
      icon: <IconMap className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard/maps",
    },
    {
      title: "Settings",
      icon: <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content Area */}
      <div className="p-6 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/trips" element={<Settings />} />
        </Routes>
      </div>

      {/* Navigation Dock */}
      <FloatingDock
        items={navigationItems}
        desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 shadow-2xl shadow-black/5 dark:shadow-white/5"
        mobileClassName="fixed bottom-6 right-6 shadow-2xl shadow-black/5 dark:shadow-white/5"
      />
    </div>
  );
};

export default Dashboard;
