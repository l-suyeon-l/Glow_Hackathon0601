import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import "../Styles/Loginform.css";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 여기서 서버로의 요청을 보내고 로그인 여부를 판단합니다.
      if (username === "admin" && password === "admin") {
        login();
        setLoginStatus("success");
        navigate("/findpage1");
      } else {
        // setLoginStatus("fail");
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        login();
        setLoginStatus("success");
        navigate("/findpage1");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="LoginP">
      <div className="div">
        <div className="middleSide">
          <div className="view">
            <div className="text-login">로그인</div>
            <div className="input-ID">
                <input
                    className="input-id"
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input-PW">
                <input
                    className="input-pw"
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <button className="click-button" onClick={handleLogin}>로그인</button>
            {loginStatus === "success" && (
              <div>
                <Link to="/findpage1" className="findpage1"></Link>
              </div>
            )}
            {loginStatus === "fail" && (
              <div>
                <Link to="/login" className="login"></Link> 
              </div>
            )}
            <Link to="/signup" className="signUp"> {/* Link to the signup page */}
              <div className="text-signUp">회원가입</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
