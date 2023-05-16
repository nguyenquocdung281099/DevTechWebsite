import { useEffect } from "react";

import "./styles.scss";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";
export default function Blogs() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    canvas.remove();
    return () => {
      const para = document.createElement("canvas");
      para.className = "canvas-bg";
      document.getElementsByClassName("app")[0].appendChild(para);
    };
  });

  return (
    <div className="wrapper blogs-page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Blog về lập trình website, kĩ thuật IT được viết bởi DevFe"
        />
        <title>Blog | DevFe </title>
      </Helmet>
      <header className=" text-white">
        <h1>DevFe Blogs 🔥</h1>
        <h4>Explore IT topics ranging from beginner to advanced.</h4>
        <div className="action-search">
          <div class="container">
            <input
              type="text"
              id="box"
              placeholder="Search anything..."
              class="search__box"
            />
            <i class="fas fa-search search__icon"></i>
          </div>
          <button className="btn">
            <i class="fas fa-filter"></i> Search
          </button>
        </div>
        <div className="header-background"></div>
      </header>
      <main className="card-list">
        <div class="card text-white">
          <div class="card-img-block">
            <div className="date">
              <div className="day">29</div>
              <div className="month">Jan</div>
            </div>
            <img
              src="https://global-uploads.webflow.com/63691faa82ea4c4778ce2111/63e00c8b6bf1b1fa15804578_05.%20What%20is%20dydx-min-p-1080.png"
              alt="Card_course"
              class="card-img"
            />
          </div>
          <div class="card-content">
            <div className="tags">
              <div className="tag">FRONTEND</div>
              <div className="tag">BACKEND</div>
            </div>
            <h3 className="text-purple">Google Authentication with React</h3>
          </div>
          <div class="card-action">
            <Link to="/blog/authentication-google-voi-react" class="btn">
              <i class="fas fa-play text-white"></i> Đọc bài viết
            </Link>
            <span>
              <i class="far fa-clock"></i> 5min
            </span>
          </div>
        </div>
      </main>
      <div className="pagi">
        Showing <span>1</span> of 1
      </div>
    </div>
  );
}
