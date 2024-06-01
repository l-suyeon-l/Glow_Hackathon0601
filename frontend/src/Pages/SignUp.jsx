import React, { useState } from 'react';
import "../Styles/SignUp.css";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [businessnumber,setBusinessNumber] = useState("");
    const [businessman,setBusinessMan] = useState("");

    const handleSignUp = async () => {
        try {
            // Here you can perform your signup logic, such as sending a request to the server
            console.log("Signing up...");
        } catch (error) {
            console.error("Error:", error);
        }
        alert("환영합니다!");
    };
    
    return (
    <div className="SignUp">
      <div className="div">
        <div className="middleSide">
          <div className="view">
            <div className="text-signup">회원가입</div>
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
            {/* business number */}
            <div className="input-BN">  
                <input
                    className="input-bn"
                    type="businessnumber"
                    placeholder="사업자 번호"
                    value={businessnumber}
                    onChange={(e) => setBusinessNumber(e.target.value)}
                />
            </div>
            {/* businessman */}
            <div className="input-Name">  
                <input
                    className="input-name"
                    type="businessnumber"
                    placeholder="사업자 이름"
                    value={businessman}
                    onChange={(e) => setBusinessMan(e.target.value)}
                />
            </div>
            
            <button className="click-button" onClick={handleSignUp}>회원가입</button>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;