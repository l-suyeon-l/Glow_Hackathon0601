import React from "react";
import "./Findpage2.css";

const Findpage2 = () => {
  return (
    <div className="element">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="map" />
          <div className="pop-up">

            
            <div className="store-list">
              <img className="image" alt="Image" src="image-2.svg" />
              <div className="view">

                <div className="div">
                  <div className="text-wrapper">(지번) 산격동 1308-22</div>
                  <div className="text-wrapper-2">(우)41544</div>
                  <p className="p">대구 북구 대학로23길 114 1층</p>
                  <div className="text-wrapper-3">0507-1414-3994</div>
                  <img className="location" alt="Location" src="location-1.png" />

                  <div className="div-2">
                    <div className="overlap-group">
                      <div className="text-wrapper-4">2개</div>
                    </div>
                    <div className="text-wrapper-5">현재 보유 우산</div>
                  </div>
                  <div className="text-wrapper-6">벨로</div>
                  <img className="telephone" alt="Telephone" src="imtc_telephone.png" />
                </div>

                <div className="div-3" />
              </div>

              <div className="view-2">
                <div className="text-wrapper-7">가게정보</div>
                <div className="div-wrapper">
                  <div className="text-wrapper-8">←</div>
                </div>
              </div>
            </div>


            <div className="search">
              <img className="img" alt="Image" src="image.png" />
              <img className="image-2" alt="Image" src="image.svg" />
              <div className="text-wrapper-9">상호명 및 주소를 검색해주세요</div>
            </div>
          </div>
          <div className="navigator">
            <div className="view-3">
              <div className="view-4">
                <div className="text-wrapper-10">회원가입</div>
              </div>
              <div className="view-5">
                <div className="text-wrapper-10">로그인</div>
              </div>
            </div>
            <div className="view-6">
              <div className="div-wrapper-2">
                <div className="text-wrapper-11">공지사항</div>
              </div>
              <div className="div-wrapper-3">
                <div className="text-wrapper-12">가게 정보 등록</div>
              </div>
              <div className="div-wrapper-4">
                <div className="text-wrapper-13">우산 재고 등록</div>
              </div>
              <div className="div-wrapper-5">
                <div className="text-wrapper-13">우산 찾기</div>
              </div>
            </div>
            <div className="view-7">
              <div className="text-wrapper-14">BP해</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findpage2;