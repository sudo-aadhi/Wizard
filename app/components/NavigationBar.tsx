import React from "react";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-center w-[354.4px] h-full">
      {/* Add navigation items here */}
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
