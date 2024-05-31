import React, { useState } from "react";
import "./Loginform.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = async () => {
    try {
      // 여기서 서버로의 요청을 보내고 로그인 여부를 판단합니다.
      if (username === "admin" && password === "admin") {
        setLoginStatus("success");
      } else {
        setLoginStatus("fail");
      }
    } catch (error) {
      console.error("Error:", error);
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
            {/* {loginStatus === "success" && <div>Success</div>}
            {loginStatus === "fail" && <div>Fail</div>} */}
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
