import React, { useEffect, useState } from "react";
import "../styles/ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollPosition(scrollPercent);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div
        className="scroll-indicator"
        style={
          isMobile
            ? { height: `${scrollPosition}%` }
            : { width: `${scrollPosition}%` }
        }
      ></div>
    </div>
  );
};

export default ScrollIndicator;
