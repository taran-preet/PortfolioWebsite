import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  const [fontSize, setFontSize] = useState("2rem"); // Default font size

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? "3rem" : "2rem"); // Adjust font size based on window width
    };

    handleResize(); // Set initial font size
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Front-end Developer",
          "Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
