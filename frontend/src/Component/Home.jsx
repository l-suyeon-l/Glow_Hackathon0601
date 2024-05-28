import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="screen">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="sliding">
            <p className="text-wrapper">비 오는 날, 우산이 없다면?</p>
            <p className="div">지금 바로 가까운 우산을 확인해보세요!</p>
            <button className="button">
              <div className="text-wrapper-2">바로가기</div>
            </button>
          </div>
          <div className="navigator">
            <div className="view">
              <div className="div-wrapper">
                <div className="text-wrapper-3">회원가입</div>
              </div>
              <div className="view-2">
                <div className="text-wrapper-3">로그인</div>
              </div>
            </div>
            <div className="view-3">
              <div className="element">
                <div className="text-wrapper-4">공지사항</div>
              </div>
              <div className="element-2">
                <div className="text-wrapper-5">가게 정보 등록</div>
              </div>
              <div className="element-3">
                <div className="text-wrapper-6">우산 재고 등록</div>
              </div>
              <div className="element-4">
                <div className="text-wrapper-6">우산 찾기</div>
              </div>
            </div>
            <div className="view-4">
              <div className="text-wrapper-7">BP해</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
