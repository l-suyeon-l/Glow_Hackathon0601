import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
    const navigate = useNavigate();
    const [slide, setSlide] = useState(false);

    const handleNavigation = (path) => {
      setSlide(true);
      setTimeout(() => {
        navigate(path);
      }, 1000);        
    };

  return (
    <div className="HomeP">
      <div className="overlap-group-wrapper">
        <div className={`background ${slide ? "slide-up" : ""}`}>

          {/* content */}
          <div className="sliding">
            <img className="image" alt="배경" src="umbrella2.png" />
            <p className="text-1">비 오는 날, 우산이 없다면?</p>
            <p className="text-2">지금 바로 가까운 우산을 확인해보세요!</p>
            <button className="button" onClick={() => handleNavigation("/findpage1")}>바로가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
