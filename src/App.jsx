import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop/BackToTop";
import Chatbot from "./components/Chatbot/Chatbot";
import AppRouter from "./Router";
import { Analytics } from "@vercel/analytics/react";
import "./static/LightMode.css";
import "./static/mobile.css";

function App() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const button = e.target.closest("button") || e.target.closest("a");
      if (button) {
        const buttonText =
          button.innerText?.trim() ||
          button.getAttribute("aria-label") ||
          button.id ||
          button.className ||
          "Unknown Button/Link";
        const currentCounts = JSON.parse(
          localStorage.getItem("buttonClicks") || "{}",
        );
        currentCounts[buttonText] = (currentCounts[buttonText] || 0) + 1;
        localStorage.setItem("buttonClicks", JSON.stringify(currentCounts));
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <BackToTop />
      <Chatbot />
      <AppRouter />
      <Analytics />
    </Layout>
  );
}

export default App;
