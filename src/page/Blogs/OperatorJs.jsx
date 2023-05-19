import "./styles.scss";
import { useEffect } from "react";
import PrismCode from "react-prism";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import Avatar from "../../assets/logo-color.png";
import QCCourse from "./component/QCCourse";
import { Helmet } from "react-helmet";

const basicOperator = `const a = 5;
const b = 5;

console.log(a + b) // 10
console.log(a - b) // 0
console.log(a / b) // 1
console.log(a * b) // 25
`;

const basicOperator1 = `const a = 6;
const b = 5;

console.log(a % b) // 1
`;

const basicOperator2 = `console.log("a" + "b") // "ab"
`;

const basicOperator3 = `console.log(5 > 4); // true

console.log(5 < 4); // false

console.log(5 >= 4); // true

console.log(5 <= 5); // true`;

const basicOperator4 = `console.log(5 === "5"); // false

console.log(5 === 5); // true

console.log(5 == "5"); // true
`;

const basicOperator5 = `const user1 = {
  name: "dev"
}

const user2 = {
  name: "dev"
}

console.log(user1 == user2); // false
console.log(user1 === user2); // false
`;

const basicOperator6 = `console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(null == 0) // false
console.log(null <= 0) // true bởi vì null gets converted into 0
`;

const codeLogin2 = `import { useState } from "react";
import GoogleLogin, { GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

const CLIENT_ID = "//your-lient-id";

const SCOPE = "https://www.googleapis.com/auth/drive";

export const GoogleAuthentication = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signOutHandler = () => {
    console.log("logged out!");
    setIsSignedIn(false);
  };

  const signInHandler = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    setIsSignedIn(true);
  };

  return (
    <>
      {isSignedIn ? (
        <GoogleLogout clientId={CLIENT_ID} buttonText="Logout" onLogoutSuccess={signOutHandler} />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={signInHandler}
          onFailure={signInHandler}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          scope={SCOPE}
        />
      )}
    </>
  );
};
`;

const codeLogOut = `import { GoogleLogout } from "react-google-login";

function Logout() {
  const logoutHandler = () => {
    console.log('successfully logged out!);
  };
  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logoutHandler}
    />
  );
}

export default Logout;`;

export default function OperatorJS() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const canvas = document.querySelector("canvas");
    canvas.remove();
    return () => {
      const para = document.createElement("canvas");
      para.className = "canvas-bg";
      document.getElementsByClassName("app")[0].appendChild(para);
    };
  }, []);

  return (
    <div className="wrapper blog-detail-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="devfe-blog, Những câu lệnh điều kiện cực quan trọng trong Javascript mà bạn chắc chắn cần biết để master Javascript, toán tử so sánh, ba ngôi, logic"
        />
        <title>Những câu lệnh điều kiện cực quan trọng trong Javascript</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://devfe-edu.netlify.app/blog/nhung-cau-lenh-dieu-kien-javascript-quan-trong"
        />
        <meta
          property="og:title"
          content="Những câu lệnh điều kiện cực quan trọng trong Javascript chỉ với 5 phút"
        />
        <meta
          property="og:description"
          content="devfe-blog, Những câu lệnh điều kiện cực quan trọng trong Javascript mà bạn chắc chắn cần biết để master Javascript, toán tử so sánh, ba ngôi, logic"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/practicaldev/image/fetch/s--4KDJ3hf4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zsws9h7gfksoy63by5zi.jpg"
        />
      </Helmet>
      <article className="article-content">
        <header>
          <h1>Những câu lệnh điều kiện cực quan trọng trong Javascript</h1>
          <span>
            June 20, 2023 <span className="tag-course">Javascript</span>
          </span>

          <a
            className="information-author"
            href="https://www.tiktok.com/@devfe68"
          >
            <div className="avatar">
              <img src={Avatar} alt="avatar-author" />
            </div>
            <h3>DevFE</h3>
          </a>
          <QCCourse />
          <div className="key-hightlight">
            <h3 className="title-blog">Một số toán tử quan trọng</h3>
            <ul>
              <li>
                <a href="#1" className="text-white">
                  Một số toán tử cơ bản +, -, *, /, %
                </a>
              </li>
              <li>
                <a href="#2" className="text-white">
                  Toán tử so sánh &gt;, &lt;, &gt;=, ==,===
                </a>
              </li>
              <li>
                <a href="#3" className="text-white">
                  Toán tử ba ngôi ?
                </a>
              </li>
              <li>
                <a href="#4" className="text-white">
                  Toán tử logic ||, &&, !, ??
                </a>
              </li>
            </ul>
            <div className="bg-key">
              <img
                src="https://global-uploads.webflow.com/6336e79cd8d43cd4d1230849/63de59bc2ae9b097edc04479_hedgie_banner%201-min.png"
                alt=""
              />
            </div>
          </div>
        </header>

        <main>
          <h3 className="title-blog" id="1">
            1. Một số toán tử cơ bản +, -, *, /, %
          </h3>
          <p className="content-blog">
            Nói đến toán tư thì chắc chắn không thể thiếu cộng (+), trừ (-),
            nhân (*), chia (/) rồi nhỉ, hơi vô tri nhỉ :v nhưng mà nó cũng quan
            trọng 🤪
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator}
            />
            không biết cái trên thi đừng code nữa nghe, tội đồng nghiệp 😆
          </p>
          <p className="content-blog">
            Nhưng mà có cái toán tử đặc biệt hơn tí đó là %. ủa wtf đó là dấu
            phần trăm mà, toán tử cái gì ở đây 🤬 nhưng mà không nó là toán tử
            chia lấy dư, thử xem nó hoạt động như nào nhé:
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator1}
            />
            Là sao nhở, sao 6 chia 5 lại bằng 1,đơn giản ở đây có nghĩa là 6
            chia 5 dư 1 và 1 chính là kết quả chia lấy dư của 6 và 5, các bạn
            hiểu chưa ? không hiểu cũng phải hiểu nhé 🤪
          </p>
          <p className="content-blog">
            Lưu ý nhỏ là toán tử + nó có thể dành để nối chuỗi nhé.
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator2}
            />
          </p>
          <h3 className="title-blog" id="2">
            2. Toán tử so sánh &gt;, &lt;, &gt;=, ==,===
          </h3>
          <p className="content-blog">
            Đây là những toán tử được sử dụng để so sánh hai giá trị. Các toán
            tử so sánh luôn trả về kết quả ở dạng Boolean, chỉ có true hoặc
            false chứ không có nửa true nửa false nhé các bạn.
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator3}
            />
            Còn toán tử == và === thì sao nhỉ, đối với các kiểu "dữ liệu nguyên
            thuỷ" như number, string, boolean thì cơ bản == dùng để so sánh giá
            trị, === để so sánh cả giá trị cả kiểu dữ liệu.
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator4}
            />
            Nhưng, nếu dễ như vậy thì không nói làm gì đúng không, đối với ví dụ
            dưới thì sao:
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator5}
            />
            Ủa cái gì vậy, vừa đưa khái niệm trên là 1 cái so sánh giá trị cái
            so sánh giá trị và kiểu dữ liệu, chẳng phải ví dụ trên đều giống
            nhau sao, vậy tại sao lại false. Bạn hãy để ý câu khái niệm trên của
            mình, nó chỉ đúng với kiểu nguyên thuỷ, còn đối với kiểu dữ liệu
            object thì nó sẽ so sánh vị trí ô nhớ của object chứ không phải so
            sánh giá trị đơn thuần nhé, lưu ý câu phỏng vấn ăn điểm này nhé ae
            😎. Lưu ý luôn vụ so sánh undefine hay null nhé !
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator5}
            />
          </p>
          <h3 className="title-blog" id="3">
            3. Toán tử ba ngôi ?
          </h3>
          <p className="content-blog">
            <PrismCode
              component="pre"
              className="language-js"
              children={codeLogOut}
            />
            Khi muốn sử dụng component này cho trang login và có thể dùng thêm
            state để theo dõi trạng thái login. code cuối cùng sẽ giống như thế
            này:
            <PrismCode
              component="pre"
              className="language-js"
              children={codeLogin2}
            />
            Và để muốn kết nối thêm với google driver hay youtube thì chúng ta
            cần thêm 2 dịch vụ Youtobe API và Google API
            <a
              href="https://developers.google.com/oauthplayground/"
              target="_blank"
              rel="noreferrer"
            >
              ở đây
            </a>
            , và thêm scope cho chúng. ví dụ:
            <PrismCode
              component="pre"
              className="language-js"
              children={`GOOGLE_DRIVE_SCOPE = "https://www.googleapis.com/auth/drive";
YOUTUBE_DATA_API_V3 = "https://www.googleapis.com/auth/youtube";`}
            />
          </p>
          <h3 className="title-blog" id="4">
            4. Toán tử logic
          </h3>
          <p className="content-blog">
            <PrismCode
              component="pre"
              className="language-js"
              children={codeLogOut}
            />
            Khi muốn sử dụng component này cho trang login và có thể dùng thêm
            state để theo dõi trạng thái login. code cuối cùng sẽ giống như thế
            này:
            <PrismCode
              component="pre"
              className="language-js"
              children={codeLogin2}
            />
            Và để muốn kết nối thêm với google driver hay youtube thì chúng ta
            cần thêm 2 dịch vụ Youtobe API và Google API
            <a
              href="https://developers.google.com/oauthplayground/"
              target="_blank"
              rel="noreferrer"
            >
              ở đây
            </a>
            , và thêm scope cho chúng. ví dụ:
            <PrismCode
              component="pre"
              className="language-js"
              children={`GOOGLE_DRIVE_SCOPE = "https://www.googleapis.com/auth/drive";
YOUTUBE_DATA_API_V3 = "https://www.googleapis.com/auth/youtube";`}
            />
          </p>
          <p className="footer-blog">
            Chúc bạn có một ngày vui vẻ - happly coding - nếu có hứng thú, bạn
            có thể xem thêm những video của tôi tại kênh tiktok&nbsp;
            <a
              href="https://www.tiktok.com/@devfe68"
              target="_blank"
              rel="noreferrer"
            >
              @devfe68
            </a>
          </p>
        </main>
      </article>

      <div className="header-background"></div>
    </div>
  );
}
