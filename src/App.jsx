/** @jsxImportSource @emotion/react */

import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonies from "./sections/Testimonies";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div css={bodyStyle}>
      <Home />
      <Projects />
      <Skills />
      <Testimonies />
      <Experience />
      <Contact />
    </div>
  );
}

const bodyStyle = {
  // display: "flex",
  // flexDirection: "column",
  // margin: "0 auto",
  "> *": {
    padding: "2rem calc(100vw - 1600px)",
  },
};
