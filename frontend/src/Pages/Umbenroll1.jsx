import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import "../Styles/Umbenroll1.css";  

const Umbenroll1 = () => {   
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();
    const [umbCnt, setUmbCnt] = useState("");

    const [name, setName] = useState("김사업");
    const [storeName, setStoreName] = useState("오크커피");
    const [address, setAddress] = useState("대구 수성구 달구벌대로 496길 11 sj빌딩 1층");

    useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인되지 않았습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    }
    }, [isLoggedIn, navigate]);

    const onClick = () => {
        alert("등록되었습니다.");
        setUmbCnt('');
    }

  return (     
        <div className="Umbenroll1">       
            <div className="div">         
                <div className="background"> 

                    <div className="upper">             
                        <div className="text-upper">우산 재고 등록</div>           
                    </div>  

                    <div className="middle">  

                        <div className="umbrellaStock">         
                            <div className="text-umbrellaStock">우산 재고</div>        
                            <input
                                className="input"
                                type="text"
                                value={umbCnt}
                                onChange={(e)=>{setUmbCnt(e.target.value)}}
                                placeholder="현재 가게에서 보유하고 있는 우산 개수를 입력해주세요"
                            />       
                            {/* 데이터는 umbCnt에 있음 */}
                            <button className="OK" onClick={onClick}>등록</button>
                        </div>      
                               
                        <div className="storeInfo">         
                            <div className="storeInfoTitle">                 
                                <div className="text-storeInfo">님의 가게 정보</div>                 
                                <div className="text-user">{name}</div>               
                            </div>                 
                            <div className="storeInfoContent">     
                                <div className="storeName">                   
                                    <div className="text-title">상호명:</div>                   
                                    <div className="text-storeName">{storeName}</div>                 
                                </div>                           
                                <div className="storeAddress">                   
                                    <div className="text-title">주소:</div>                   
                                    <div className="text-storeAddress">{address}</div>                 
                                </div>                
                            </div>                 
                        </div>           
                    </div>    
                </div>         
            </div>     
        </div>   
    ); 
};

export default Umbenroll1;