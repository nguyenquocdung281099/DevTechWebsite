import "./style.scss";

export default function Social() {
  return (
    <nav class="social">
      <ul>
        <li class="instagram">
          <a
            href="https://www.tiktok.com/@devfe68"
            target="_blank"
            rel="noreferrer"
          >
            Tiktok<i class="fab fa-tiktok" aria-hidden="true"></i>
          </a>
        </li>
        <li class="facebook">
          <a
            href="https://www.facebook.com/laptrinhwebdevfe/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook<i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li class="instagram" target="_blank" rel="noreferrer">
          <a href="https://instagram.com/devfe68?">
            Instagram<i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
