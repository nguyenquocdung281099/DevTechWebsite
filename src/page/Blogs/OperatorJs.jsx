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
console.log(null <= 0) // true bởi null đc javascript convert về  0
`;

const basicOperator7 = `result = condition ? value1 : value2`;

const basicOperator8 = `console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true || true); // true
console.log(true || false || true); // true
console.log(false || true || false); // true
console.log(false || false || false); // false`;

const basicOperator9 = `console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true && true && true); // true
console.log(true && false && true); // false
console.log(false && true && false); // false
console.log(false && false && false); // false`;

const basicOperator10 = `console.log(1 && 0); // 0 (giá trị falsy đầu tiên là 0)
console.log(null && 2); // null (giá trị falsy đầu tiên là null)
console.log(10 && "" && undefined && 0); // "" (giá trị falsy đầu tiên là "")
console.log("n" && undefined && 10); // undefined (giá trị falsy đầu tiên là undefined)
console.log(10 && "a"); // "a" (không có giá trị falsy, trả về giá trị cuối cùng)`;

const basicOperator11 = `console.log(!true); // false
console.log(!false); // true`;

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

          <ul className="social-1">
            <li class="instagram">
              <a
                href="https://www.tiktok.com/@devfe68"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-tiktok" aria-hidden="true"></i>
              </a>
            </li>
            <li class="facebook">
              <a
                href="https://www.facebook.com/laptrinhwebdevfe/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li class="instagram" target="_blank" rel="noreferrer">
              <a href="https://instagram.com/devfe68?">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

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
              children={basicOperator6}
            />
          </p>
          <h3 className="title-blog" id="3">
            3. Toán tử ba ngôi ?
          </h3>
          <p className="content-blog">
            <img src="https://i0.wp.com/hocjavascript.net/wp-content/uploads/2021/02/Toan-tu-ba-ngoi-trong-JavaScript-1.png?w=478&ssl=1" />
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator7}
            />
            Nó sẽ hoạt động như sau: Nếu condition nó là đúng thì toán tử sẽ trả
            về value 1 còn nếu là sai thì nó sẽ trả về giá trị của value 2. Đơn
            giản phải không nào, nó sẽ giải quyết được một số If else đơn giản
            đấy nhé.
          </p>
          <h3 className="title-blog" id="4">
            4. Toán tử logic
          </h3>
          <h4 className="subtitle-blog">Toán tử OR (||)</h4>
          <p className="content-blog">
            toán tử OR trả về giá trị true nếu có ít nhất một toán hạng là true,
            ngược lại sẽ trả về false.
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator8}
            />
            Và các bước nó hoạt động sẽ như sau:
            <ul>
              <li>Thứ tự thực hiện từ trái sang phải.</li>
              <li>
                Lần lượt chuyển mỗi toán hạng về kiểu boolean
                <ul>
                  <li>
                    Nếu kết quả là true thì trả về giá trị gốc của toán hạng đó
                    và dừng lại.
                  </li>
                  <li>
                    Nếu kết quả là false thì tiếp tục thực hiện với toán hạng
                    tiếp theo.
                  </li>
                </ul>
              </li>
              <li>
                Nếu không có giá trị truthy nào thì kết quả trả về là giá trị
                của toán hạng cuối cùng.
              </li>
            </ul>
            Oki, dễ rồi đúng không :v
          </p>
          <h4 className="subtitle-blog">Toán tử AND (&&)</h4>
          <p className="content-blog">
            toán tử AND trả về giá trị true nếu cả hai toán hạng là true, ngược
            lại sẽ trả về false
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator9}
            />
            Toán tử AND trong JavaScript sẽ tìm và trả về giá trị falsy đầu
            tiên. Nếu không có giá trị falsy nào thì kết quả sẽ là giá trị của
            toán hạng cuối cùng. Và các bước nó hoạt động sẽ như sau:
            <ul>
              <li>Thứ tự thực hiện từ trái sang phải.</li>
              <li>
                Lần lượt chuyển mỗi toán hạng về kiểu boolean
                <ul>
                  <li>
                    Nếu kết quả là false thì trả về giá trị gốc của toán hạng đó
                    và dừng lại.
                  </li>
                  <li>
                    Nếu kết quả là true thì tiếp tục thực hiện với toán hạng
                    tiếp theo.
                  </li>
                </ul>
              </li>
              <li>
                Nếu không có giá trị falsy nào thì kết quả trả về là giá trị của
                toán hạng cuối cùng.
              </li>
            </ul>
            Thêm nhẹ 1 ví dụ nè:
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator10}
            />
            Oki, quá dễ
          </p>
          <h4 className="subtitle-blog">Toán tử NOT (!)</h4>
          <p className="content-blog">
            toán tử NOT trả về giá trị true nếu toán hạng là false và trả về
            false nếu toán hạng là true. Vì là toán tử một ngôi, nên toán tử NOT
            chỉ chứa một toán hạng. Không có gì bàn cãi nữa rồi, cãi táng liền
            🥸
            <PrismCode
              component="pre"
              className="language-js"
              children={basicOperator11}
            />
          </p>
          <h4 className="subtitle-blog">Toán tử Nullish coalescing (??)</h4>
          <p className="content-blog">
            Rồi, dài quá dài với 1 blog ngắn (vô tri quá 🤣 ) Mình cùng đến với
            toán tử cuối cùng nhé. Toán tử Nullish Coalescing là toán tử hai
            ngôi a ?? b, với định nghĩa là: Nếu a khác null và undefined thì kết
            quả của a ?? b là a. Ngược lạị, nếu a bằng null hoặc undefined thì
            kết quả của a ?? b là b.
            <PrismCode
              component="pre"
              className="language-js"
              children={`result = a ?? b;`}
            />
          </p>
          Đây là những toán tử mà mình biết và thấy nó rất quan trọng đối với
          mình, còn bạn thì sao, nếu có toán tử nào nữa, hãy góp ý cho mình nhé
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
