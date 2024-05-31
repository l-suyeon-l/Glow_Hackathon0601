import React from "react";
import { useState } from "react";
import "./StoreInfo.css";

const StoreInfo = () => {
    // 가게 주소와 상호명은 입력을 안한 상태이기에 공백으로 남겨둔다
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");

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
                            <input
                                className="input"
                                type="text"
                                value={address}
                                onChange={(e)=>{setAddress(e.target.value)}}
                                placeholder="가게 주소를 입력해주세요"
                            />
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
                        <button className="OK">등록</button>
                    </div>
                </div>



                {/* 네비게이터는 미수정 */}
                {/* <div className="navigator">
                    <div className="view-right">
                        <div className="MyPage">
                            <div className="text-right">마이페이지</div>
                        </div>
                        <div className="Logout">
                            <div className="text-right">로그아웃</div>
                        </div>
                    </div>
                    <div className="view-middle">
                        <div className="element">
                            <div className="text-notice">공지사항</div>
                        </div>
                        <div className="element-2">
                            <div className="text-storeinfo">가게 정보 등록</div>
                        </div>
                        <div className="element-3">
                            <div className="text-umbrella">우산 재고 등록</div>
                        </div>
                        <div className="element-4">
                            <div className="text-umbrella">우산 찾기</div>
                        </div>
                    </div>
                    <div className="view-left">
                        <div className="Logo">BP해</div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default StoreInfo
