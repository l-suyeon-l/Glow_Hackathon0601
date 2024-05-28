import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap-group">
          <div className="view">
            <div className="text-login">로그인</div>
            <div className="div-wrapper">
                <div className="text-signup">회원가입</div>
            </div>
            <img className="kakao-login" alt="kakao-login" src="kakao_login.png" />
            <img className="naver-login" alt="naver-login" src="naver_login.png" />
            <img className="google-login" alt="google-login" src="google_login.png"/>
          </div>
        </div>
        <div className="navigator">
          <div className="view-right">
            <div className="SignUp">
              <div className="text-sign">회원가입</div>
            </div>
            <div className="Login">
              <div className="text-sign">로그인</div>
            </div>
          </div>
          <div className="view-middle">
            <div className="Notice">
              <div className="text-notice">공지사항</div>
            </div>
            <div className="StoreInfo">
              <div className="text-storeinfo">가게 정보 등록</div>
            </div>
            <div className="UmbrellaStock">
              <div className="text-umbrella">우산 재고 등록</div>
            </div>
            <div className="UmbrellaFind">
              <div className="text-umbrella">우산 찾기</div>
            </div>
          </div>
          <div className="view-lefg">
            <div className="Logo">BP해</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;