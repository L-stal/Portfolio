import React, { useEffect, useState } from "react";
import "../styles/ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div
        className="scroll-indicator"
        style={{ height: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
