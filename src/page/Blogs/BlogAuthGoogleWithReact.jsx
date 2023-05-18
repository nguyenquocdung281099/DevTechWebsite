import { Link } from "@reach/router";
import "./styles.scss";
import { useEffect } from "react";
import CourseReactImg from "../../assets/react-course.jpg";
import PrismCode from "react-prism";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import Avatar from "../../assets/logo-color.png";
import QCCourse from "./component/QCCourse";
import { Helmet } from "react-helmet";

const codeLogin = `import React from "react";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID = "YOUR_CLIENT_ID_HERE";

function Login() {
  const responseGoogle = (response: any) => {
    console.log(response.accessToken);
  };
  return (
    <div className="App">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
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

export default function BlogAuthGoogleWithReact() {
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
          content="devfe-blog, đăng nhập google với reactJs, login google with reactjs, tương tác với google driver, youtube bằng reactjs"
        />
        <title>Đăng nhập google với ReactJS</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Đăng nhập google với ReactJS chỉ với 5 phút"
        />
        <meta
          property="og:description"
          content="devfe-blog, đăng nhập google với reactJs, login google with reactjs, tương tác với google driver, youtube bằng reactjs"
        />
        <meta
          property="og:image"
          content="https://i.stack.imgur.com/9EHtN.png"
        />
      </Helmet>
      <article className="article-content">
        <header>
          <h1>Login Google với ReactJs trong 5 phút</h1>
          <span>
            June 18, 2023 <span className="tag-course">ReactJs</span>
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
            <h3 className="title-blog">Một số trường hợp có thể sử dụng</h3>
            <ul>
              <li>Login với Google bằng ReactJS</li>
              <li>Tải tệp lên google drive bằng ReactJS</li>
              <li>Tương tác với Youtube API từ ReactJS</li>
              <li>Tương tác với Google sheet từ ReactJS</li>
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
          <h3 className="title-blog">1. Cấu hình Google OAuth</h3>
          <p className="content-blog">
            Trước khi bắt đầu, chúng ta phải đảm bảo rằng Google được cấu hình
            đúng cho project mới của bạn. Truy cập Google API Console để có được
            thông tin xác thực OAuth 2.0 như Client ID và Client Secret, chúng
            ta làm theo các bước dưới:
          </p>
          <ul>
            <li>
              Đăng nhập vào &nbsp;
              <a
                href="https://console.cloud.google.com/apis/dashboard"
                target="_blank"
                rel="noreferrer"
              >
                Google Developer Console
              </a>
            </li>
            <li>
              Nhấp vào Select a Project và chọn New Project trong menu đổ xuống.
            </li>
            <li>
              Đặt tên dự án mà bạn muốn, tôi đặt là Google-oauth2, nhấp Create.
            </li>
            <li>
              Khi dự án được tạo (mất vài giây), hãy sử dụng lại bộ chọn dự án
              và chọn dự án mới tạo của bạn.
            </li>
            <li>
              Nhấp vào Tạo thông tin đăng nhập &gt; ID ứng dụng khách OAuth
              (Create credentials &gt; OAuth client ID).
            </li>
            <li>Chọn loại ứng dụng Web (Web application).</li>
            <li>
              Đặt tên cho OAuth 2.0 client của bạn và nhấp vào Tạo (Create).
            </li>
          </ul>
          <img
            src="https://live.staticflickr.com/65535/52906576200_b0834c2f6b_b.jpg"
            alt="google_simple"
          />
          <p>
            Sau khi đã thành công lấy được Client ID và Client Secret thì chúng
            ta sẽ chuyển qua giai đoạn làm việc với UI, để bắt đầu, trước tiên
            chúng ta cần cài đặt dependency
          </p>
          <p className="content-blog">
            <PrismCode
              component="pre"
              className="language-js"
              children={`yarn add react-google-login`}
            />
          </p>
          <h3 className="title-blog">2. Tạo Component Login</h3>
          <p className="content-blog">
            <PrismCode
              component="pre"
              className="language-js"
              children={codeLogin}
            />
            Nếu đăng nhập thành công, bạn sẽ nhận được accessToken và tokenId ở
            response trả về. Lưu token đó ở state hoặc local storage để sử dụng
            sau này để thực hiện thêm tương tác đến các dịch vụ khác của google
            như driver hay youtube.
          </p>
          <h3 className="title-blog">2. Tạo Component LogOut</h3>
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
