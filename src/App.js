import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CourseDetail from "./page/CourseDetail";
import HomePage from "./page/HomePage/index.jsx";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="" element={<HomePage/> }/>
        <Route path="course/react-chuyen-sau" element={<CourseDetail/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
