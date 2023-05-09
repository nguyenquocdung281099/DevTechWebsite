import { Router, Link } from "@reach/router";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CourseDetail from "./page/CourseDetail";
import HomePage from "./page/HomePage/index.jsx";
import FeatureDeveloping from "./Components/FeatureDeveloping";
import CourseQcTop from "./Components/CourseQcTop";
import Social from "./Components/Social";

function App() {
  return (
    <div className="app">
      <Social/>
      <CourseQcTop/>
      <Header />
      <Router>
        <HomePage path="/" />
        <CourseDetail path="course/react-chuyen-sau" />
        <FeatureDeveloping path="/blog" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
