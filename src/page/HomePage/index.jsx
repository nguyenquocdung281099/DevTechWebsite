import "./style.scss";
import headerImg from "../../assets/header-image.png";
import myTiktokImg from "../../assets/my-tiktok.jpg";
import cardBannerImg from "../../assets/card.png";
import cardTiktokImg from "../../assets/bannerTiktok.png";
import CourseReactImg from "../../assets/react-course.jpg";
import userImg from "../../assets/user.jpg";
import Typewriter from "typewriter-effect";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";
import { tiktokList } from "../../constants";
import { useEffect } from "react";
import Loading from "../../Components/Loading";

export default function HomePage({
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="lập trình website tốt nhất Đà Nẵng, lập trình Frontend, Lập trình Reactjs, Lập trình VueJS"
        />
        <title>DevFe Edu - Đào tạo, Mentor lập trình</title>
      </Helmet>
        <div className="wrapper">
          <header class="header">
            <div class="header-container">
              <div class="header-container__content">
                <h3 class="top-title text-white">HỌC, LEVEL UP VÀ</h3>
                <h1 class="text-purple">NÂNG CAO KIẾN THỨC VỀ</h1>
                <div class="text-animation-block">
                  <span class="text-purple ityped">
                    <Typewriter
                      options={{
                        strings: [
                          "ReactJs, NextJs",
                          "VueJs, NuxtJs ",
                          "NodeJs, NestJs",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
                <p class="text-deco">
                  Khám phá giới IT với Lớp học DevFe, điểm đến duy nhất có thể
                  mang cho bạn mọi thứ để trở thành một developer Frontend hay
                  Backend.
                </p>
              </div>
              <div class="header-container__image">
                <img src={headerImg} alt="header_img" />
              </div>
            </div>
            <div class="header-background"></div>
          </header>

          <section class="section-about block">
            <h2 class="text-title text-white">Mình là ai ?</h2>
            <div class="about-us__content">
              <div class="about-us__text">
                Mình đang là một Front End Developer, tiktoker, và mentor dạy
                lập trình Front-End. Mình may mắn làm việc với những công ty
                tuyệt vời và mình cũng đã từng giảng viên tại 1 trung tâm IT tại
                Đà Nẵng. Trong nhiều năm làm việc, sau ra trường mình đã làn
                sóng IT đánh cho bầm dập, những lần vấp gã mà không ai định
                hướng. Mình có 1 kênh tiktok nơi mà mình chia sẻ lại những kiến
                thức hay mà mình đã trải qua. kênh tiktok{" "}
                <span class="text-purple">DEVFE68</span> của mình. Nội dung trên
                tiktok đa dạng chủ đề từ Web Dev, cuộc sống... được đưa ra từ
                những kiến thức thực tế, những gì mình đã từng trải qua.
              </div>
              <div class="img-tiktok">
                <img src={myTiktokImg} alt="my_tiktok" />
              </div>
            </div>
          </section>
          <section class="section-why block">
            <h1 class="text-title text-white">Tại sao lại có DevFe ?</h1>
            <div className="why-wrapper">
              <div className="img-wrapper">
                <img src={userImg} alt="user_coding" />
              </div>
              <div class="why__text">
                <h5 class="text-purple">MÌNH LÀ MỘT DEVELOPER TRÁI NGÀNH !</h5>
                <h6>
                  Đúng vậy ! Mình xuất phát điểm không phải là dân IT, mình học
                  ngành kĩ thuật máy tính tại ĐHBK Đà Nẵng, phần lớn mình học về
                  phần cứng khô khan, thời sinh viên mình gắn liền với những cái
                  vi xử lý, những con diot, điện trở, biến trở, những cuộn chì
                  hàn... và những dòng code cực buồn chán C/C++ và đôi khi là
                  matlab để vẽ sóng, nhận tín hiệu chán đến tận cổ, bởi vậy
                  chính những thứ đó đã đưa mình đến quyết định là phải thay đổi
                  định hướng, chính là bước vào con đường IT và cụ thể hơn chính
                  là Lập trình Website.
                  <br />
                  Mình chắc rằng, thời điểm đó của mình cũng bế tắc, chưa biết
                  bắt đầu từ đâu, trong khi lên mạng đầy rẫy những tài liệu,
                  NHƯNG vấn đề ở đây là đọc cái gì, đi theo hướng nào, đi thế
                  nào để nhanh hơn, để cạnh tranh với các bạn cùng trang lứa hay
                  có thể các bạn ít tuổi hơn học đúng chuyên ngành !?
                </h6>
                <h6 class="text-purple">
                  Vì vậy DevFe cũng như mình, có mặt ở đây để trở thành mentor
                  của các bạn, chỉ dẫn các bạn cách học, hướng học để bạn đi
                  nhanh nhất qua những bài giảng trực tiếp, qua meeting chứ
                  không phải video có sẵn
                </h6>
              </div>
            </div>
          </section>

          <section className="course-list block">
            <h2 class="text-title text-white">Khóa học của Mình</h2>

            <div class="card-list">
              <div class="card text-white">
                <div class="card-img-block">
                  <img
                    src={CourseReactImg}
                    alt="Card_course"
                    class="card-img"
                  />
                </div>
                <div class="card-content">
                  <h3 className="text-purple">
                    Khóa học Frontend từ cơ bản đến nâng cao
                  </h3>
                </div>
                <div class="card-action">
                  <Link to="course/react-chuyen-sau" class="btn">
                    <i class="fas fa-play text-white"></i>Chi tiết khóa học
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="section-video block" id="video">
            <h2 className="text-title text-white">Video Tiktok phổ biến</h2>

            <div className="card-list">
              {tiktokList.map((item) => (
                <div key={item.label} className="card text-white">
                  <div className="card-img-block">
                    <img
                      src={item.img || cardTiktokImg}
                      alt="Card_video"
                      className="card-img"
                    />
                  </div>
                  <div className="card-content">
                    <h3>{item.label}</h3>
                  </div>
                  <div className="card-action">
                    <a
                      className="btn"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-play text-white"></i>View video
                    </a>
                    <div>
                      {item.view} <i class="fas fa-eye"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
    </>
  );
}
