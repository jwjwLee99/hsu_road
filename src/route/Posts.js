import React from "react";
import busTime from "../images/busTime.png";

const Posts = () => {
  return (
    <div>
      <h2 className="tabName">기타정보</h2>
      <div>버스시간표</div>
      <img src={busTime} alt="버스시간표" className="busImage" />
      <br />
      <br />
      <div>핫플레이스</div>
      <div className="contentsBox">핫플 박스(데이터 수집중)</div>
    </div>
  );
};

export default Posts;
