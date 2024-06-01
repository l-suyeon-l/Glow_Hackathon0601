import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import axios from 'axios';
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
        navigate("/login");
        alert("로그인되지 않았습니다. 로그인 페이지로 이동합니다.");
      
    }
    }, [isLoggedIn, navigate]);

    const onClick = async () => {
        try {
            // 우산 개수 데이터를 서버에 전송
            const response = await axios.post("http://35.208.234.110:8080/api/umbrellas/1", {
                umbCnt: umbCnt
            });
            console.log("우산 개수 전송 성공:", response.data);

            // 전송 성공 시 알림창 띄우고 입력값 초기화
            alert("등록되었습니다.");
            setUmbCnt('');
        } catch (error) {
            console.error("우산 개수 전송 실패:", error);
            // 실패 시 알림창 띄우기 등의 처리 추가 가능
        }
    };


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