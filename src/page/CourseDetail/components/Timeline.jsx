/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";

export default function TimeLine() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="main-timeline">
            <div class="timeline">
              <a href="#" class="timeline-content">
                <span class="timeline-year">
                  1<sup>st</sup>
                </span>
                <div class="timeline-icon">
                  <i class="fa fa-rocket" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <h3 class="title">HTML + CSS cơ bản và nâng cao</h3>
                  <p class="description">
                    Bạn sẽ nắm rõ được tất cả các thẻ HTML, thuộc tính, bộ chọn
                    CSS, Boostrap5, TailwinCss và có thể xây dựng được 1 website
                    tĩnh (landing page) có hỗ trợ SEO, Animation và deploy lên
                    server.
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
              <a href="#" class="timeline-content">
                <span class="timeline-year">
                  2<sup>nd</sup>
                </span>
                <div class="timeline-icon">
                  <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <h3 class="title">JavaScript</h3>
                  <p class="description">
                    Bạn sẽ nắm rõ cách làm việc với biến, object, array, bất
                    đồng bộ ở JS, Closure, Promise, Callback ..., chưa hết bạn
                    sẽ được làm việc với API để hiểu rõ được cách kết nối với
                    server và sử dụng Typescript.
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
              <a href="#" class="timeline-content">
                <span class="timeline-year">
                  3<sup>rd</sup>
                </span>
                <div class="timeline-icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <h3 class="title">ReactJS</h3>
                  <p class="description">
                    Nắm rõ ReactJs là gì, lifecircle, các hook cơ bản như
                    useRef, useState, useEffect và nâng cao như useMemo,
                    useCallback, useContext, useReducer... sau đó, Redux, Redux
                    saga, Redux toolkit, các thư viện làm UI như Ant design, hỗ
                    trợ validate như YUP, react-hook-form...
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
              <a href="#" class="timeline-content">
                <span class="timeline-year">
                  3<sup>rd</sup>
                </span>
                <div class="timeline-icon">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <h3 class="title">Tool</h3>
                  <p class="description">
                    Chương này chúng ta sẽ học cách làm việc với git bao gồm tất
                    cả các lệnh cơ bản + nâng cao. Không những vậy ở đây ta sẽ
                    tìm hiểu về cơ chế refresh token, authentication và
                    Authortication
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
              <a href="#" class="timeline-content">
                <span class="timeline-year">
                  4<sup>th</sup>
                </span>
                <div class="timeline-icon">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <h3 class="title">Dự án thực tế</h3>
                  <p class="description">
                    Ở đây, bạn sẽ dùng những kiến thức đã học để tự hoàn thành
                    dự án của bản thân có đầy đủ chức năng như 1 dự án thực tế,
                    ví dụ như Login, thanh toán, List có sort, filter, phân
                    trang, xem trước... Và deploy lên môi trường thực tế dưới sự
                    hỗ trợ của Mentor
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
              <a href="#" class="timeline-content">
                <span class="timeline-year">
                  4<sup>th</sup>
                </span>
                <div class="timeline-icon">
                  <i class="fa fa-apple" aria-hidden="true"></i>
                </div>
                <div class="content">
                  <h3 class="title">Hỗ trợ CV và phỏng vấn thử</h3>
                  <p class="description">
                    Bạn sẽ được hỗ trợ làm CV 1 cách tốt nhất để hấp dẫn nhất
                    đối với nhà tuyển dụng. Sau khi đã hoàn thành thì bạn sẽ
                    được đội ngũ mentor phỏng vấn trước giống với thực tế và có
                    đánh giá cụ thể để bạn có định hướng tốt
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
