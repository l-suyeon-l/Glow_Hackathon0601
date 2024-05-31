import React from "react"; 
import { useNavigate } from "react-router-dom";
import "./Umbenroll2.css";  

const Umbenroll2 = () => {   
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (     
        <div className="Umbenroll2">       
            <div className="div">         
                <div className="background">  
                    
                    <div className="upperSide">             
                        <div className="text-page">우산 재고 등록</div>           
                    </div>      

                    <div className="middleSide">                     
                        <div className="text-warning">잠시만요!</div>      
                        <div className="text-warningMessage">우산 재고를 등록하려면 먼저 가게 정보를 등록해야 합니다.</div> 

                        <div className="button" onClick={() => handleNavigation("/storeinfo")}>               
                            <div className="text-gotoStoreInfo">가게 정보 등록하러 가기</div>
                            <div className="go">→</div>             
                        </div>                    
                    </div>          
                </div>         
            </div>     
        </div>   
    ); 
};

export default Umbenroll2;