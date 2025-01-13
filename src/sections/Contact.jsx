/** @jsxImportSource @emotion/react */

import { COLORS } from "../data/globals";
import WhatsAppImg from "../assets/imgs/links/whatsapp.png";
import LinkedInImg from "../assets/imgs/links/linkedin.png";
import BlueSkyImg from "../assets/imgs/links/bluesky.png";

const links = [
  {
    title: "What's App",
    img: WhatsAppImg,
    url: "https://wa.me/34628617641",
  },
  {
    title: "LinkedIn",
    img: LinkedInImg,
    url: "https://linkedin.com/in/tonienguix",
  },
  {
    title: "BlueSky",
    img: BlueSkyImg,
    url: "https://bsky.app/",
  },
];

export default function Contact() {
  return (
    <div css={pageStyle}>
      <h1 className="title">Links</h1>
      <div className="wrapper">
        {links.map((link) => {
          return (
            <a className="link" href={link.url} key={link.title} target="blank">
              <img alt={link.title} src={link.img} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: COLORS.blue,
  padding: "0 10% 5vh",
  ".wrapper": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "50px",
    justifyItems: "center",
  },
  ".link": {
    background: "#eaeaea",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
    padding: "15px",
    ":hover": {
      background: "#bcbcbcad",
      color: "white",
      "*": {
        cursor: "pointer",
        display: "inline-block",
        transform: "scale(1.1) rotate(5deg)",
      },
    },
  },
};
