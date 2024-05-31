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
            </div>
        </div>
    );
};

export default StoreInfo
