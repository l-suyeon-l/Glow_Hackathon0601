import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap-group">
          <div className="view">
            <div className="text-wrapper">로그인</div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">회원가입</div>
            </div>
            <div className="view-2" />
            <div className="view-3" />
            <div className="view-4" />
          </div>
        </div>
        <div className="navigator">
          <div className="view-5">
            <div className="SignUp">
              <div className="text-wrapper-3">회원가입</div>
            </div>
            <div className="Login">
              <div className="text-wrapper-3">로그인</div>
            </div>
          </div>
          <div className="view-8">
            <div className="Notice">
              <div className="text-wrapper-4">공지사항</div>
            </div>
            <div className="StoreInfo">
              <div className="text-wrapper-5">가게 정보 등록</div>
            </div>
            <div className="UmbrellaStock">
              <div className="text-wrapper-6">우산 재고 등록</div>
            </div>
            <div className="UmbrellaFind">
              <div className="text-wrapper-6">우산 찾기</div>
            </div>
          </div>
          <div className="view-9">
            <div className="BP">BP해</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;