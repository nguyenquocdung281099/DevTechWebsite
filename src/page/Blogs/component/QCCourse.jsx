import CourseReactImg from "../../../assets/react-course.jpg";
import { Link } from "@reach/router";

export default function QCCourse() {
  return (
    <div className="qc-course-blog">
      <div class="card text-white">
        <div class="card-img-block">
          <div className="date">
            <div className="day">5</div>
            <div className="month">June</div>
          </div>
          <img src={CourseReactImg} alt="Card_course" class="card-img" />
        </div>
        <div class="card-content">
          <div className="tags">
            <div className="tag-course">FRONTEND</div>
            <div className="tag-course">REACTJS</div>
          </div>
          <h3 className="text-purple">
            Frontend Chuyên Sâu - mentor từ cơ bản đến nâng cao
          </h3>
          <p>- Hơn 100 học viên đã hoàn thành và có việc làm.</p>
          <p>- mỗi lớp chỉ có 5 - 6 bạn học viên.</p>
        </div>
        <div class="card-action">
          <Link to="/course/react-chuyen-sau" class="btn">
            <i class="fas fa-play text-white"></i> Chi tiết khoá học
          </Link>
          <span>
            <i class="far fa-clock"></i> 4 month
          </span>
        </div>
      </div>
    </div>
  );
}
