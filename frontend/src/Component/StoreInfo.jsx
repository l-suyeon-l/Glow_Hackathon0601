import React from "react";
import "./StoreInfo.css";

const StoreInfo = () => {
    return (
        <div className="screen">
            <div className="div">
                <img className="background" alt="Background" src="background.png" />
                <div className="navigator-login">
                    <div className="view">
                        <div className="div-wrapper">
                            <div className="text-wrapper">마이페이지</div>
                        </div>
                        <div className="view-2">
                            <div className="text-wrapper">로그아웃</div>
                        </div>
                    </div>
                    <div className="view-3">
                        <div className="element">
                            <div className="text-wrapper-2">공지사항</div>
                        </div>
                        <div className="element-2">
                            <div className="text-wrapper-3">가게 정보 등록</div>
                        </div>
                        <div className="element-3">
                            <div className="text-wrapper-4">우산 재고 등록</div>
                        </div>
                        <div className="element-4">
                            <div className="text-wrapper-4">우산 찾기</div>
                        </div>
                    </div>
                    <div className="view-4">
                        <div className="text-wrapper-5">BP해</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export StoreInfo