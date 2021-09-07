import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navSection">
      <ul className="navBtnList">
        <li className="navBtn">
          <Link to="/home">
            <i className="fas fa-home"></i>
            <br />
            <nav>원룸</nav>
          </Link>
        </li>
        <li className="navBtn">
          <Link to="/res">
            <i className="fas fa-utensils"></i>
            <br />
            <nav>식당</nav>
          </Link>
        </li>
        <li className="navBtn">
          <Link to="/pages">
            <i className="far fa-compass"></i>
            <br />
            <nav>홈페이지</nav>
          </Link>
        </li>
        <li className="navBtn">
          <Link to="/posts">
            <i className="fas fa-lightbulb"></i>
            <br />
            <nav>기타정보</nav>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
