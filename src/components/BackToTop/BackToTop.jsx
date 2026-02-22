import React, { useState, useEffect } from "react";
import "./BackToTop.css";
import IconMapper from "../IconMapper/IconMapper";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <IconMapper iconName="FaArrowUp" />
    </button>
  );
};

export default BackToTop;
