import "./style.scss";
import navbarIcon from "../../assets/bar.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav class="navbar">
      <Link class="brand" to={"/"}>
        <span class="text-purple">DevFe</span>
        <span class="text-white">Edu</span>
      </Link>
      <div className="navbar-icon">
        <img src={navbarIcon} alt="" />
      </div>
      <div class="navlist">
        <Link to="/course/ii" class="navlink btn">
          <span>Course</span>
        </Link>
        <Link to={"/#video"} class="navlink btn">
          <span>Videos</span>
        </Link>
        <Link to="/blog" class="navlink btn">
          <span>Blog</span>
        </Link>
      </div>
    </nav>
  );
}
