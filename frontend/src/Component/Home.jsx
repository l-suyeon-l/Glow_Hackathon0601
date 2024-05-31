import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

  return (
    <div className="screen">
      <div className="overlap-group-wrapper">
        <div className="background">

          {/* content */}
          <div className="sliding">
            <img className="image" alt="배경" src="umbrella2.png" />
            <p className="text-1">비 오는 날, 우산이 없다면?</p>
            <p className="text-2">지금 바로 가까운 우산을 확인해보세요!</p>
            <button className="button" onClick={() => handleNavigation("/findpage1")}>바로가기</button>
          </div>
          
          {/* navigator */}
          {/* <div className="navigator">
           
            <div className="view-right">
              <div className="SignUp" onClick={() => handleNavigation("/login")}>
                <div className="text-sign">회원가입</div>
              </div>
              <div className="Login" onClick={() => handleNavigation("/login")}>
                <div className="text-sign">로그인</div>
              </div>
            </div>
            
            <div className="view-middle">
              <div className="element">
                <div className="text-notice">공지사항</div>
              </div>
              <div className="element-2" onClick={() => handleNavigation("/storeinfo")}>
                <div className="text-storeinfo">가게 정보 등록</div>
              </div>
              <div className="element-3" onClick={() => handleNavigation("/umbenroll2")}>
                <div className="text-umbrella">우산 재고 등록</div>
              </div>
              <div className="element-4" onClick={() => handleNavigation("/findpage1")}>
                <div className="text-umbrella">우산 찾기</div>
              </div>
            </div>
            
            <div className="view-left">
              <div className="Logo">BP해</div>
            </div>
          </div> */}



        </div>
      </div>
    </div>
  );
};

export default Home;
