import React from "react";
import "./StoreInfo.css";

const StoreInfo = () => {
    return (
        <div className="screen">
            <div className="div">
                <div className="background">
                    <div className="middle">
                        <div className="input-1">
                            <div className="div-wrapper">
                                <div className="input">사업자 번호를 입력해주세요</div>
                            </div>
                            <div className="text">사업자 번호</div>
                            <div className="check">
                                <div className="text-check">확인</div>
                            </div>
                        </div>
                        <div className="input-2">
                            <div className="div-wrapper">
                                <div className="input">상호명을 입력해주세요</div>
                            </div>
                            <div className="text">상호명</div>
                            <div className="check">
                                <div className="text-check">확인</div>
                            </div>
                        </div>
                        <div className="input-3">
                            <div className="div-wrapper">
                                <div className="input">가게 주소를 입력해주세요</div>
                            </div>
                            <div className="text">가게 주소</div>
                            <div className="check">
                                <div className="text-check">확인</div>
                            </div>
                        </div>
                    </div>
                    <div className="view-upper">
                        <div className="text-upper">가게 정보 등록</div>
                    </div>
                </div>
                <div className="navigator">
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
                            <div className="text-unbrella">우산 재고 등록</div>
                        </div>
                        <div className="element-4">
                            <div className="text-unbrella">우산 찾기</div>
                        </div>
                    </div>
                    <div className="view-left">
                        <div className="Logo">BP해</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreInfo
