/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";

import arrowImg from "../assets/imgs/drawn_arrow.jpeg";
import { COLORS } from "../data/globals";

export default function App() {
  return (
    <div css={pageStyle}>
      <WebDev />
      <ItsMe />
      <ArrowDown />
      <GoToTop />
    </div>
  );
}

const pageStyle = {
  minHeight: "100svh",
  background: COLORS.white,
};

const WebDev = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((color) => (color === "#4a60ab" ? "#2994d1" : "#4a60ab"));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [color, setColor] = useState("#4a60ab");

  const compStyle = {
    fontFamily: "'Staatliches', sans-serif",
    padding: "20% 20% 50px",
    color,
    transition: "all 2000ms linear",
    textAlign: "left",
    h1: {
      fontSize: "3rem !important",
    },
  };

  return (
    <div css={compStyle}>
      <h1>Web</h1>
      <h1>Dev</h1>
      <h1>Toni</h1>
    </div>
  );
};

const ItsMe = () => {
  return (
    <div css={itsMeStyle} className="flexCenter">
      <img src={arrowImg} alt="arrow" className="arrow" />
      <p>It's Me!</p>
      <img
        className="profile"
        src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png"
        alt="gender-neutral-user"
      />
    </div>
  );
};

const itsMeStyle = {
  position: "relative",
  width: "fit-content",
  margin: "0 auto",
  ".arrow": {
    mixBlendMode: "darken",
    width: "70px",
    position: "absolute",
    bottom: 90,
    left: 60,
    webkitTransform: "scaleX(-1) rotate(50deg)",
    transform: "scaleX(-1) rotate(50deg)",
  },
  p: {
    fontFamily: "'Shadows Into Light', cursive",
    whiteSpace: "nowrap",
    position: "absolute",
    top: "-10px",
    left: "120px",
    zIndex: 2,
    fontSize: "1.5rem",
  },
  ".profile": {
    width: "100px",
    border: "1px solid black",
    borderRadius: "100px",
    padding: "10px",
  },
};

const ArrowDown = () => {
  let pageHeight = window.innerHeight;

  return (
    <svg
      className="arrows pointer"
      onClick={() => window.scrollTo(0, pageHeight)}
    >
      <path className="a1" d="M0 0 L30 32 L60 0"></path>
      <path className="a2" d="M0 20 L30 52 L60 20"></path>
      <path className="a3" d="M0 40 L30 72 L60 40"></path>
    </svg>
  );
};

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check scroll position
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const gotToTopStyle = {
    display: "flex",
    opacity: isVisible ? 1 : 0, // Fade in/out
    visibility: isVisible ? "visible" : "hidden", // Ensure the button is not clickable when hidden
    background: "#ddffca",
    width: "40px",
    height: "40px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "100px",
    transition: "opacity 0.3s, visibility 0.3s, background-color 0.3s", // Smooth transitions
    border: "none",
  };

  return (
    <button css={gotToTopStyle} onClick={scrollToTop}>
      <p>🔝</p>
    </button>
  );
};
