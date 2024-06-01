import React, { useState, useEffect } from "react";

import "./Login.css";
// JavaScript SDK에 있는 naver 선언
const { naver } = window;
const { Kakao } = window;

const Login = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   handleNaverLogin();
  //   handleKakaoLogin();
  // }, []);

  const handleNaverLogin = () => {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: "cZ9Gfhn6VJssEUVKpNyv",
        callbackUrl: "https://localhost:3000/login",
        isPopup: true,
        loginButton: {
          color: "green",
          type: 3,
          height: 50,
        },
      });
      naverLogin.init();
      console.log("Performing Naver login...");

      naverLogin.getLoginStatus((status) => {
        console.log(`로그인?: ${status}`);
        if (status) {
          setUser({ ...naverLogin.user });
          window.opener.location.href = "http://localhost:3000";
          window.close();
        }
      });
  };
  
  // const handleGoogleLogin = () => {
  //     gapi.load('auth2', () => {
  //     const auth2 = gapi.auth2.init({
  //       client_id: "",
  //       scope: "profile email",
  //     });
  //     auth2.attachClickHandler(document.getElementById('google-login-btn'), {}, (googleUser) => {
  //       const profile = googleUser.getBasicProfile();
  //       setUser({
  //         name: profile.getName(),
  //         email: profile.getEmail(),
  //         profile_image: profile.getImageUrl(),
  //       });
  //       // Additional logic if needed after Google login
  //     });
  //   });
  //   console.log("Performing Google login...");
  // };

  const handleKakaoLogin = () => {
    // Kakao.init("73279cbea4d29660c6ddd891ab5dc933");
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: (authObj) => {
        Kakao.API.request({
          url: "/v2/user/me",
          success: (response) => {
            setUser(response);
            // Handle successful Kakao login
          },
          fail: (error) => {
            // Handle failed Kakao login
          },
        });
      },
      fail: (error) => {
        // Handle failed Kakao login button creation
      },
    });
  };
  
  
  return (
    <div className="LoginP">
      <div className="div">
        
        <div className="middleSide">
          <div className="view">
            <div className="text-login">로그인</div>

            <img className="naver-login" alt="naver-login" src="login_naver.png" />
            <img className="google-login" alt="google-login" src="login_google.png"/>
            <img className="kakao-login" alt="kakao-login" src="login_kakao.png" />

            {/* 네이버 로그인 */}
            {/* <div id="naverIdLogin" className="naver-login"></div> */}
            {/* <button id="google-login-btn" className="google-login">구글 로그인</button> */}
            
            {/* 카카오 로그인  */}
            {/* <div id="kakao-login-btn" className="kakao-login"></div> */}

            <div className="signUp">
                <div className="text-signUp">회원가입</div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Login;