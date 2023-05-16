import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from 'react-dom';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
      <App/>,
   rootElement
  );
} else {
  ReactDOM.render(
      <App/>,
   rootElement
  );
}
