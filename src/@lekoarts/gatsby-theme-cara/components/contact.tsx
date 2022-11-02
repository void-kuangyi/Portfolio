/** @jsx jsx */
import { jsx } from "theme-ui";
import Inner from "../elements/inner";
import Svg from "./svg";
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";
import Footer from "./footer";
// @ts-ignore
import ContactMDX from "../sections/contact";

const Contact = () => (
  <div>
    <Inner>
      <ContactMDX />
    </Inner>
    <Footer />
    <div
      sx={{
        bottom: 0,
        width: `full`,
        transform: `matrix(1, 0, 0, -1, 0, 0)`,
      }}
    >
      <div
        sx={{
          position: `relative`,
          height: `full`,
          svg: { width: `100%`, height: `40vh` },
          path: { animation: waveAnimation(`20s`) },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="contact-wave"
          viewBox="0 0 800 338.05"
          preserveAspectRatio="none"
        >
          <path>
            <animate
              attributeName="d"
              values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
              repeatCount="indefinite"
              dur="30s"
            />
          </path>
        </svg>
      </div>
    </div>
  </div>
);

export default Contact;
