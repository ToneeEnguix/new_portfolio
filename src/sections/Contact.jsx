/** @jsxImportSource @emotion/react */

import { COLORS } from "../data/globals";

export default function Contact() {
  return (
    <div css={pageStyle}>
      <h1 className="title">Contact</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="your@email.com" />
        <textarea placeholder="Hey Toni, I loved your portfolio and wanted to offer you the best job ever"></textarea>
      </form>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: COLORS.blue,
  padding: "0 10% 5vh",
  h1: {
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "*": {
      marginBottom: "1.5rem",
      padding: "5px 10px",
    },
    textarea: {
      height: "300px",
      resize: "none",
    },
  },
};
