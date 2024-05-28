import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    // const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     navigate("./findpage1");
    // };

  return (
    <div className="screen">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          {/* content */}
          <div className="sliding">
            <img className="image" alt="배경" src="./umbrella.jpg" />
            <p className="text-1">비 오는 날, 우산이 없다면?</p>
            <p className="text-2">지금 바로 가까운 우산을 확인해보세요!</p>
            {/* <button className="button" onClick={handleButtonClick}> */}
            <button className="button">
              <div className="Shortcuts">바로가기</div>
            </button>
          </div>
          {/* navigator */}
          <div className="navigator">
            {/* 회원가입 / 로그인 */}
            <div className="view-right">
              <div className="SignUp">
                <div className="text-sign">회원가입</div>
              </div>
              <div className="Login">
                <div className="text-sign">로그인</div>
              </div>
            </div>
            {/* 우산 찾기 / 우산 재고 등록 / 가게 정보 등록 / 공지사항 */}
            <div className="view-middle">
              <div className="element">
                <div className="text-notice">공지사항</div>
              </div>
              <div className="element-2">
                <div className="text-storeinfo">가게 정보 등록</div>
              </div>
              <div className="element-3">
                <div className="text-umbrella">우산 재고 등록</div>
              </div>
              <div className="element-4">
                <div className="text-umbrella">우산 찾기</div>
              </div>
            </div>
            {/* 로고 */}
            <div className="view-left">
              <div className="Logo">BP해</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
