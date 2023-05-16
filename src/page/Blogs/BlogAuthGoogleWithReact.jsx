import { Link } from "@reach/router";
import "./styles.scss";
import { useEffect } from "react";
import CourseReactImg from "../../assets/react-course.jpg";

export default function BlogAuthGoogleWithReact() {
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
    <div className="wrapper blog-detail-wrapper">
      <article className="article-content"></article>
      <div className="qc-course-blog">
        <div class="card text-white">
          <div class="card-img-block">
            <div className="date">
              <div className="day">5</div>
              <div className="month">June</div>
            </div>
            <img
              src={CourseReactImg}
              alt="Card_course"
              class="card-img"
            />
          </div>
          <div class="card-content">
            <div className="tags">
              <div className="tag">FRONTEND</div>
              <div className="tag">REACTJS</div>
            </div>
            <h3 className="text-purple">Frontend Chuyên Sâu - mentor từ cơ bản đến nâng cao </h3>
            <p>- Hơn 100 học viên đã hoàn thành và có việc làm.</p>
            <p>- mỗi lớp chỉ có 5 - 6 bạn học viên.</p>
          </div>
          <div class="card-action">
            <Link to="/blog/authentication-google-voi-react" class="btn">
              <i class="fas fa-play text-white"></i> Chi tiết khoá học
            </Link>
            <span>
              <i class="far fa-clock"></i> 4 month
            </span>
          </div>
        </div>
      </div>

      <div className="header-background"></div>
    </div>
  );
}
