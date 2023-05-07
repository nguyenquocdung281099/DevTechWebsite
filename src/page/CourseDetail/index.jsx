import "./style.scss";
import targetImg from "../../assets/target-icon.svg";
import quoteImg from "../../assets/quote.svg";
import TickImg from "../../assets/tick.svg";
import TickDoneImg from "../../assets/tick-done.svg";
import CourseReactImg from "../../assets/react-course.jpg";
import AdvantagesImg from "../../assets/Advantages.jpg";
import { dataLearn, targetList } from "../../constants";
import TimeLine from "./components/Timeline";

export default function CourseDetail() {
  return (
    <div className="wrapper">
      <header class="header-course">
        <div class="header-container">
          <h3 className="text-purple">
            KHÓA HỌC FRONTEND từ cơ bản đến nâng cao
          </h3>
          <p className="text-white text-center">
            Bạn là một sinh viên IT chưa có định hướng cho riêng mình ? <br />
            Bạn là một người trái nghành đang bơ vơ giữa muôn vàn lí tưởng ? Vậy
            bạn đã đến đúng chỗ, ở đây tôi sẽ đưa bạn trở thành một Developer
            tốt nhất từ những kiến thức cơ bản đến những kiến thức nâng cao khó
            nhằn !
            <br />
          </p>

          <h2 className="text-white">
            Vấn đề của bạn là
            <span className="text-purple"> ĐỊNH HƯỚNG và tôi có</span>
          </h2>
          <div className="price">
            <h1 className="text-white">
              Frontend Chuyên Sâu - từ cơ bản đến nâng cao🔥 - 48 buổi - 4 Tháng
            </h1>
            {/* <h2 className="text-price text-white">
              <span className="price-course text-important">1,500,000</span>{" "}
              <sup>đ</sup>/tháng hoặc{" "}
              <span className="price-course text-important">4,500,000</span>
              <sup>đ</sup>/khóa
            </h2> */}
            <button className="btn btn-register">
              Đăng kí tham gia khóa học
            </button>
          </div>
          <img src={CourseReactImg} alt="Khóa học Frontend/Reactjs" />
        </div>

        <div class="header-background"></div>
      </header>
      <section className="benefit-course block">
        <h2 class="text-title">Bạn sẽ nhận được gì ?</h2>
        <div className="benefit-text text-white">
          <h3 className="text-important">
            <img src={quoteImg} alt="" /> 1m<sup>2</sup> có 10 dev ReactJs
            <img src={quoteImg} alt="" />
          </h3>
          <p>
            Chắc hẳn, bạn đã nghe câu này rất nhiều rồi nhỉ, đúng vậy, hiện tại
            10 người có 8 ông code Reactjs nhưng các công ty thì không bao giờ
            ngừng tuyển Reactjs Developer, bạn có bao giờ đặt ra câu hỏi đó cho
            chính bản thân mình hay chưa ??
          </p>
          <p>
            Vâng đó chính là sự khác biệt mà tôi đem lại cho các bạn. Giúp bạn
            nổi trội giữa <span className="text-purple">RỪNG</span> developer
          </p>
          <p>
            Khóa học Front end chuyên sâu này bắt đầu với việc học các kiến thức
            cơ bản nhất của <span className="text-purple">HTML5, </span>
            <span className="text-purple">CSS3 </span>,
            <span className="text-purple"> Javascript </span> , kiến thức về
            <span className="text-purple"> SEO, Animation</span>, JS như HOF,
            Async Await,Destructuring, Rest Parameter để bạn tự tin hơn trước
            khi bắt tay vào code những dòng code ReactJs đầu tiên. Ngoài ra,
            những kiến thức về trình duyệt, Typescript, Authentication, Node.js,
            Git cũng được dạy để bạn luôn cảm thấy đây không chỉ là một khóa học
            Front end, nó là tất cả những gì mà 1 Middle ReactJs cần có.
            Frontend chuyên sâu vượt xa các kiến thức nền tảng, bạn sẽ master
            các tool lập trình, thực chiến một dự án lớn để có thể viết vào CV,
            giúp bạn tự tin phỏng vấn bất kỳ level front-end dev nào.
          </p>
          <p>Những kiến thức bạn nhận được sau khóa học: </p>
          <ul className="list-learn">
            {dataLearn.map((item) => (
              <li>
                <img src={TickDoneImg} alt="" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="data-benefit text-white">
          <div className="data-item">
            <h2>48+</h2>
            <h6>
              Buổi học <br />
              trực tiếp/Online với Mentor
            </h6>
          </div>
          <div className="data-item">
            <h2>100+</h2>
            <h6>
              Học Viên đã đăng kí <br />
              và có việc làm
            </h6>
          </div>
        </div>
      </section>
      <section className="content-course-block block">
        <h2 className="text-title">
        Nội dung khóa học Frontend Chuyên Sâu
        </h2>
        <TimeLine/>
      </section>
      <section className="method-block block">
        <h2 className="text-title">Phương pháp Giảng Dạy</h2>
        <div className="method-content">
          <div className="method-text">
            <p className="text-white">
              Về cơ bản, các bạn sẽ được chia nhỏ từng nhóm từ 5 - 7 học viên,
              học trực tiếp với mentor qua meeting (có thể record nếu bạn muốn),
              nên bạn có thể tương tác trực tiếp với mentor 1 cách nhanh chóng
              nhất. Khóa học được thiết kế dựa theo kinh nghiệm của các bạn
              senior để giúp các học viên sẽ có đủ kiến thức trong thời gian
              ngắn nhất và không chỉ học lí thuyết mà khóa học đem đến từ{" "}
              <span className="text-purple">
                70% thực hành và chỉ 30% lý thuyết
              </span>
              , để có thể đưa đến cho học viên những bài toán thực tế ở các dự
              án giúp nhanh chóng làm quen với thực tại.
            </p>
            <h3 className="text-white">Những ưu điểm của phương pháp dạy:</h3>
            <ul className="Advantages text-white">
              <li>
                <img src={TickDoneImg} alt="" /> Tương tác trực tiếp với Mentor,
                Video không quay sẵn
              </li>
              <li>
                <img src={TickDoneImg} alt="" />
                Học online, có thể học ở mọi nơi, không tốn thời gian đi lại
              </li>
              <li>
                <img src={TickDoneImg} alt="" />
                Được làm việc cùng những mentor giỏi nhất (senior Frontend)
              </li>
            </ul>
          </div>
          <img
            src={AdvantagesImg}
            alt="ưu điểm của khóa học Frontend chuyên sâu"
          />
        </div>
      </section>
      <section className="block who-block">
        <h2 className="text-title">
          Ai nên đăng kí khóa học Frontend chuyên sâu
        </h2>
        <p className="text-white">
          - <span className="text-purple">Các bạn sinh viên IT</span> đang theo
          học tại các trường ĐH, mong muốn có một nền tảng lập trình vững vàng
          để tạo lợi thế khi đi xin việc
        </p>
        <p className="text-white">
          -{" "}
          <span className="text-purple">
            Các bạn sinh viên đang theo học các ngành khác ngoài IT{" "}
          </span>
          , mong muốn chuyển sang ngành IT để có được các cơ hội việc làm và
          phát triển nghề nghiệp tốt hơn
        </p>
        <p className="text-white">
          - Các bạn đã đi làm ở các{" "}
          <span className="text-purple">
            ngành nghề khác ngoài IT mong muốn chuyển sang ngành IT
          </span>{" "}
          để có công việc tốt hơn
        </p>
        <p className="text-white">
          -{" "}
          <span className="text-purple">
            Các bạn trẻ đang băn khoăn không biết lựa chọn ngành nghề nào cho
            mình
          </span>
          , đang mong muốn được tư vấn và hỗ trợ để có thể đưa ra lựa chọn đúng
          của mình, nhanh chóng nắm vững tay nghề và tìm kiếm việc làm.
        </p>
        <p className="text-white">
          - Yêu cầu chung: Các bạn ham học hỏi, chăm chỉ, kiên trì và không ngại
          hỏi đáp cũng như đưa ra các thắc mắc trong quá trình học tập.
        </p>
      </section>
      <section className="target-course block">
        <h2 class="text-title text-white">Mục Tiêu của khóa học</h2>
        <div className="target-list">
          {targetList.map((item) => (
            <div class="card text-white">
              <div class="card-img-block">
                <img
                  src={targetImg}
                  alt="Mục tiêu khóa học Reactjs"
                  class="card-img"
                />
              </div>
              <div class="card-content ">
                <h3 className="text-purple">{item.label}</h3>
                <h6 className="text-white">{item.content}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
