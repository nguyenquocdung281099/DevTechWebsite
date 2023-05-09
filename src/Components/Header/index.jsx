import "./style.scss";
import { Link } from "@reach/router";
import { useState } from "react";
export default function Header() {
  const [isActivenavBar, setIsActiveNavBar] = useState();
  const classNavList = isActivenavBar ? "navlist" : "navlist inactive";
  return (
    <nav class="navbar">
      <Link class="brand" to={"/"}>
        <span class="text-purple">DevFe</span>
        <span class="text-white">Edu</span>
      </Link>
      <div className="navbar-icon">
        <label
          for="check"
          onClick={() => {
            setIsActiveNavBar(document.getElementById('check').checked);
          }}
        >
          <input type="checkbox" id="check" checked={isActivenavBar}/>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div class={classNavList} onClick={() => setIsActiveNavBar(false)}>
        <Link to="/course/react-chuyen-sau" class="navlink btn">
          <span>Course</span>
        </Link>
        <a href={"/#video"} class="navlink btn">
          <span>Videos</span>
        </a>
        <Link to="/blog" class="navlink btn">
          <span>Blog</span>
        </Link>
      </div>
    </nav>
  );
}
