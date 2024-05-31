import React from "react"; 
import { useState } from "react";
import "./Umbenroll1.css";  

const Umbenroll1 = () => {   
    const [umbCnt, setUmbCnt] = useState("");

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
                                <div className="text-user">김원빈</div>               
                            </div>                 
                            <div className="storeInfoContent">     
                                <div className="storeName">                   
                                    <div className="text-title">상호명:</div>                   
                                    <div className="text-storeName">벨로</div>                 
                                </div>                           
                                <div className="storeAddress">                   
                                    <div className="text-title">주소:</div>                   
                                    <div className="text-storeAddress">대구 북구 대학로23길 114 1층</div>                 
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