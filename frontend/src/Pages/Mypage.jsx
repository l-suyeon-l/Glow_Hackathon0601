import React, { useState } from "react";
import axios from "axios";
import "../Styles/Mypage.css";

const Mypage = () => {   
        const [name, setName] = useState("김사업");
        const [businessNumber, setBusinessNumber] = useState("11806235");
    
        const [postcode, setPostcode] = useState("42087");
        const [roadAddress, setRoadAddress] = useState("대구 수성구 달구벌대로 496길 11 sj빌딩");
        const [jibunAddress, setJibunAddress] = useState("범어동 201-14");
        const [extraAddress, setExtraAddress] = useState("(범어동)");
        const [detailAddress, setDetailAddress] = useState("1층");
        const [guide, setGuide] = useState('');
    
        const [storeName, setStoreName] = useState("오크커피");

        const openDaumPostcode = () => {
            new window.daum.Postcode({
            oncomplete: function (data) {
                let roadAddr = data.roadAddress;
                let extraRoadAddr = '';
    
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraRoadAddr += data.bname;
                }
                if (data.buildingName !== '' && data.apartment === 'Y') {
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if (extraRoadAddr !== '') {
                extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
    
                setPostcode(data.zonecode);
                setRoadAddress(roadAddr);
                setJibunAddress(data.jibunAddress);
                setExtraAddress(extraRoadAddr);
    
                if (data.autoRoadAddress) {
                let expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                setGuide(`(예상 도로명 주소 : ${expRoadAddr})`);
                } else if (data.autoJibunAddress) {
                let expJibunAddr = data.autoJibunAddress;
                setGuide(`(예상 지번 주소 : ${expJibunAddr})`);
                } else {
                setGuide('');
                }
            }
            }).open();
        };
        
        const onClick = async () => {
            try {
            const response = await axios.post("https://example.com/api/mypage", {
                name,
                businessNumber,
                postcode,
                roadAddress,
                jibunAddress,
                extraAddress,
                detailAddress,
                storeName
            });
            console.log("Response:", response.data);
                alert("수정되었습니다.");
            } catch (error) {
                console.error("Error:", error);
                alert("서버에 데이터를 전송하는 중 오류가 발생했습니다.");
            }
        };

    return (     
        <div className="Mypage">       
            <div className="overlap-wrapper">         
                <div className="overlap">           
                    <div className="background">    
                        <div className="text-mypage">마이페이지</div>
                        <button className="OK" onClick={onClick}>수정</button>            
                        <div className="content">               
                            <div className="content-background"> 

                                <div className="text-name">이름</div> 
                                <input
                                    className="input-name"
                                    type="text"
                                    placeholder="이름"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <div className="text-businessNum">사업자 번호</div>  
                                <input
                                    className="input-busNum"
                                    type="text"
                                    placeholder="사업자 번호"
                                    value={businessNumber}
                                    onChange={(e) => setBusinessNumber(e.target.value)}
                                />

                                <div className="text-storeAddress">가게 주소</div>   
                                <div>
                                    <input type="text" id="var-postcode" className="add" placeholder="우편번호" value={postcode} readOnly />
                                    <input type="button" className="findButton" onClick={openDaumPostcode} value="우편번호 찾기" /><br />
                                    <input type="text" id="var-roadAddress" className="add" placeholder="도로명주소" value={roadAddress} readOnly />
                                    <input type="text" id="var-jibunAddress" className="add" placeholder="지번주소" value={jibunAddress} readOnly />
                                    <span id="guide" style={{color: '#999', display: guide ? 'block' : 'none'}}>{guide}</span>
                                    <input type="text" id="var-detailAddress" className="add" placeholder="상세주소" value={detailAddress} onChange={(e)=>setDetailAddress(e.target.value)}/>
                                    <input type="text" id="var-extraAddress" className="add" placeholder="참고항목" value={extraAddress} readOnly />
                                </div>

                                <div className="text-storeName">상호명</div>   
                                <input
                                    className="input-storeName"
                                    type="text"
                                    placeholder="상호명"
                                    value={storeName}
                                    onChange={(e) => setStoreName(e.target.value)}
                                />
                            </div>           
                            <img className="bookmark" alt="북마크" src="bookmark.png" />             
                        </div>                         
                    </div>        
                </div>       
            </div>     
        </div>   
    ); 
};

export default Mypage;