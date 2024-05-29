import React from "react"; 
import "./Umbenroll1.css";  

const Umbenroll1 = () => {   
  return (     
        <div className="screen">       
            <div className="div">         
                <div className="background"> 

                    <div className="upper">             
                        <div className="text-upper">우산 재고 등록</div>           
                    </div>  

                    <div className="middle">  

                        <div className="umbrellaStock">                
                            <div className="inputCurrentUmbrella">                 
                                <p className="text-CurrentUmbrella">현재 가게에서 보유하고 있는 우산 개수를 입력해주세요</p>               
                            </div>                           
                            <div className="text-umbrellaStock">우산 재고</div>  
                            <div className="OK">                 
                                <div className="text-OK">확인</div>               
                            </div>             
                        </div>      
                               
                        <div className="storeInfo">         
                            <div className="storeInfoTitle">                 
                                <div className="text-storeInfo">님의 가게 정보</div>                 
                                <div className="text-user">김원빈</div>               
                            </div>                 
                            <div className="storeInfoContent">     
                                <div className="storeName">                   
                                    <div className="text-storeName">상호명:</div>                   
                                    <div className="text-content">벨로</div>                 
                                </div>                           
                                <div className="storeAddress">                   
                                    <div className="text-storeAddress">주소:</div>                   
                                    <div className="text-content">대구 북구 대학로23길 114 1층</div>                 
                                </div>                
                            </div>                 
                        </div>           
                    </div>    
                </div>         


                {/* 네비게이터는 미수정 */}
                <div className="navigator-login">           
                    <div className="view-6">             
                        <div className="view-7">               
                            <div className="text-wrapper-9">마이페이지</div>             
                        </div>             
                        <div className="view-8">               
                            <div className="text-wrapper-9">로그아웃</div>             
                        </div>           
                    </div>           
                    <div className="view-9">             
                        <div className="element">               
                            <div className="text-wrapper-10">공지사항</div>             
                        </div>             
                        <div className="element-2">               
                            <div className="text-wrapper-11">가게 정보 등록</div>             
                        </div>             
                        <div className="element-3">               
                            <div className="text-wrapper-12">우산 재고 등록</div>             
                        </div>             
                        <div className="element-4">               
                            <div className="text-wrapper-12">우산 찾기</div>             
                        </div>           
                    </div>           
                    <div className="view-10">             
                        <div className="text-wrapper-13">BP해</div>           
                    </div>         
                </div>       

            </div>     
        </div>   
    ); 
};

export default Umbenroll1;