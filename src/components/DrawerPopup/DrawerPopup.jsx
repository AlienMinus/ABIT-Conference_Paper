import { useEffect, useState } from "react";
import drawerData from "../../data/drawer.json";
import "./DrawerPopup.css";

const drawers = drawerData.drawers;

const DrawerPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isOpen = currentIndex < drawers.length;
  const closeCurrentDrawer = () => {
    setCurrentIndex((index) => Math.min(index + 1, drawers.length));
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setCurrentIndex((index) => Math.min(index + 1, drawers.length));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentDrawer = drawers[currentIndex];

  return (
    <div
      className="drawer-popup-overlay"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeCurrentDrawer();
      }}
    >
      <section
        className={`drawer-popup${currentDrawer.heading ? " drawer-popup-with-heading" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={currentDrawer.heading}
      >
        <button
          className="drawer-popup-close"
          type="button"
          aria-label={
            currentIndex < drawers.length - 1
              ? "Close announcement and show next"
              : "Close announcement"
          }
          autoFocus
          onClick={closeCurrentDrawer}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        {currentDrawer.heading && (
          <header className="drawer-popup-heading">
            <h2>{currentDrawer.heading}</h2>
            {currentDrawer.description && <p>{currentDrawer.description}</p>}
          </header>
        )}
        <img
          className="drawer-popup-image"
          src={currentDrawer.src}
          alt={currentDrawer.alt}
        />
      </section>
    </div>
  );
};

export default DrawerPopup;
