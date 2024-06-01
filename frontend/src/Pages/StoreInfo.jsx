import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";

import "../Styles/StoreInfo.css";

const StoreInfo = () => {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();
    // 가게 주소와 상호명은 입력을 안한 상태이기에 공백으로 남겨둔다
    // const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [postcode, setPostcode] = useState('');
    const [roadAddress, setRoadAddress] = useState('');
    const [jibunAddress, setJibunAddress] = useState('');
    const [extraAddress, setExtraAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [guide, setGuide] = useState('');

    useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인되지 않았습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    }
    }, [isLoggedIn, navigate]);

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
    
    const onClick = () => {
        alert("등록되었습니다.");
        // setAddress('');
        setName('');
        setPostcode('');
        setRoadAddress('');
        setJibunAddress('');
        setDetailAddress('');
        setExtraAddress('');    // 등록 이후 입력칸 초기화
    }

    return (
        <div className="StoreInfo">
            <div className="div">
                <div className="background">

                    <div className="upper">
                        <div className="text-upper">가게 정보 등록</div>
                    </div>

                    <div className="middle">
                        <div className="storeAddress">
                            <div className="textA">가게 주소</div>
                            {/* <input
                                className="input"
                                type="text"
                                value={address}
                                onChange={(e)=>{setAddress(e.target.value)}}
                                placeholder="가게 주소를 입력해주세요"
                            /> */}
                            <div>
                                <input type="text" id="var-postcode" className="add" placeholder="우편번호" value={postcode} readOnly />
                                <input type="button" className="findButton" onClick={openDaumPostcode} value="우편번호 찾기" /><br />
                                <input type="text" id="var-roadAddress" className="add" placeholder="도로명주소" value={roadAddress} readOnly />
                                <input type="text" id="var-jibunAddress" className="add" placeholder="지번주소" value={jibunAddress} readOnly />
                                <span id="guide" style={{color: '#999', display: guide ? 'block' : 'none'}}>{guide}</span>
                                <input type="text" id="var-detailAddress" className="add" placeholder="상세주소" value={detailAddress} onChange={(e)=>{setDetailAddress(e.target.value)}}/>
                                <input type="text" id="var-extraAddress" className="add" placeholder="참고항목" value={extraAddress} readOnly />
                            </div>
                        </div>
                        <div className="storeName">
                            <div className="textA">상호명</div>
                            <input
                                className="input"
                                type="text"
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                                placeholder="상호명을 입력해주세요"
                            />
                        </div>
                        {/* 데이터는 address, name에 있음 */}
                        <button className="OK" onClick={onClick}>등록</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreInfo
