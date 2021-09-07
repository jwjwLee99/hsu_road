import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import App from "../shared/App";

const Root = () => (
  <BrowserRouter>
    <div className="mainHeader">
      <Link to="/">
        <i className="fab fa-apple"></i>
      </Link>
    </div>
    <App></App>
  </BrowserRouter>
);

export default Root;
