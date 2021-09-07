import React from "react";

const Pages = () => {
  return (
    <div>
      <header className="navHeader">
        <h2 className="tabName">학교 홈페이지</h2>
      </header>
      <div>
        <ul className="homepageLinkList">
          <li>
            <a
              className="homepageLink"
              href="http://www.hanseo.ac.kr/intro2/intro.html"
              target="_blank"
            >
              {/* eslint-disable-next-line */}
              학교홈페이지
            </a>
            <div className="etc">학교 메인 홈페이지</div>
          </li>
          <li>
            <a
              className="homepageLink"
              href="https://nportal.hanseo.ac.kr/"
              target="_blank"
            >
              {/* eslint-disable-next-line */}
              한서포탈
            </a>
            <div className="etc">한서포탈- 학생 정보관련</div>
          </li>
          <li>
            <a
              className="homepageLink"
              href="https://www.hanseo.ac.kr/boardCnts/list.do?boardID=298&m=040101&s=hs"
              target="_blank"
            >
              {/* eslint-disable-next-line */}
              학사 공지
            </a>
            <div className="etc">학교 생활관련 공지</div>
          </li>
          <li>
            <a
              className="homepageLink"
              href="https://www.hanseo.ac.kr/boardCnts/list.do?boardID=301&m=040104&s=hs"
              target="_blank"
            >
              {/* eslint-disable-next-line */}
              장학 공지
            </a>
            <div className="etc">학교 장학관련 공지</div>
          </li>
          <li>
            <a
              className="homepageLink"
              href="https://www.hanseo.ac.kr/schdList.do?m=0405&s=hs"
              target="_blank"
            >
              {/* eslint-disable-next-line */}
              학사 일정
            </a>
            <div className="etc">각종 일정 확인</div>
          </li>
          <li>
            <a
              className="homepageLink"
              href="https://www.hanseo.ac.kr/food/foodView.do?m=0504&s=hs"
              target="_blank"
            >
              {/* eslint-disable-next-line */}
              교내식당메뉴
            </a>
            <div className="etc">인곡관 식당메뉴</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pages;
