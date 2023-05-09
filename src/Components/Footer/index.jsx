import "./style.scss";
import ReactIcon from "../../assets/react.svg";
import NextIcon from "../../assets/nextjs.svg";

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright © 2023 DevFe - DevFE</p>
      <div>
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          <img src={ReactIcon} alt="reactJs - framework javascript" />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <img src={NextIcon} alt="NextJs - framework javascript" />
        </a>
      </div>
    </div>
  );
}
