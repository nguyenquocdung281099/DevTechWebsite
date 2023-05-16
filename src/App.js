import { Router } from "@reach/router";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CourseDetail from "./page/CourseDetail";
import HomePage from "./page/HomePage/index.jsx";
import CourseQcTop from "./Components/CourseQcTop";
import Social from "./Components/Social";
import Blogs from "./page/BlogListPage";
import BlogAuthGoogleWithReact from "./page/Blogs/BlogAuthGoogleWithReact";

function App() {
  return (
    <div className="app">
      <Social />
      <CourseQcTop />
      <Header />
      <Router>
        <HomePage path="/" />
        <CourseDetail path="course/react-chuyen-sau" />
        <Blogs path="/blog" />
        <BlogAuthGoogleWithReact path="/blog/authentication-google-voi-react" />
      </Router>
      <Footer />

      <canvas className="canvas-bg"></canvas>
    </div>
  );
}

export default App;
