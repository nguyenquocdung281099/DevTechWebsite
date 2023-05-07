import { Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function RouterDefault({ path, Component, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      element={
        <div>
          <Header />
          <Component />
          <Footer />
        </div>
      }
    />
  );
}
