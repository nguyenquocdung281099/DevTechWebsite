import { Router, Link } from "@reach/router";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CourseDetail from "./page/CourseDetail";
import HomePage from "./page/HomePage/index.jsx";
import FeatureDeveloping from "./Components/FeatureDeveloping";
import CourseQcTop from "./Components/CourseQcTop";
import Social from "./Components/Social";
import { useEffect } from "react";
import { createBackground } from "./Common/functionCommon";
import { useState } from "react";
import Loading from "./Components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    createBackground();
  });
  return (
    <div className="app">
      <Social />
      <CourseQcTop />
      <Header />
      <Router>
        <HomePage path="/"  />
        <CourseDetail
          path="course/react-chuyen-sau"
          
        />
        <FeatureDeveloping
          path="/blog"

        />
      </Router>
      <Footer />

      <canvas className="canvas-bg"></canvas>
    </div>
  );
}

export default App;
