import React, { useEffect, useState } from "react";
import "./Findpage1.css";

const Findpage1 = () => {
  const [location, setLocation] = useState({ lat: 37.5665, lng: 126.9780 }); // 기본 좌표 (서울)
  const [address, setAddress] = useState("");

  useEffect(() => {
    // 사용자 위치 정보 얻기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // Kakao Maps API 사용하여 주소 정보 가져오기
          const geocoder = new kakao.maps.services.Geocoder();
          const coord = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
          geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              setAddress(result[0].address.address_name);
            }
          });
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
    // 카카오 맵 API를 사용하여 지도를 생성합니다.
    const { kakao } = window;
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(location.lat, location.lng), // 사용자 위치를 중심으로 지도 설정
      level: 2, // 지도의 확대 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 사용자 위치에 마커 추가
    const markerPosition = new kakao.maps.LatLng(location.lat, location.lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [location]); // 위치가 업데이트될 때마다 지도를 다시 생성


  return (
    <div className="Findpage1">
      <div className="overlap">

        {/* 지도 */}
        <div id="map" className="map" />

        {/* 팝업창 */}
        <div className="pop-up">

          {/* 팝업창 : 검색 */}
          <div className="search">
            <img className="image-3" alt="돋보기" src="imtc_search.png" />
            <img className="image-4" alt="검색선" src="line-search.png" />
            <div className="text-search">상호명 및 주소를 검색해주세요</div>
          </div>

          {/* 팝업창 : 가게목록 */}
          <div className="store-list">
            <img className="image" alt="가게목록윗선" src="line-storelistupper.png" />


            <div className="store1">

              <img className="storeProfile" alt="비블리오테카" src="profile4.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">070-8875-7777</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 산격동 1325-7</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)41544</div>
              </div>
              <div className="address">
                <div className="text-address">대구 북구 대학로23길 13 1층</div>     {/* text-address css 효과 없음 */}
              </div>
              <div className="storeName">
                <div className="text-storeName">비블리오테카</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">9개</div>
                  </div>
                </div>
              </div>
              
              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>



            <div className="store2">

              <img className="storeProfile" alt="어썸브루커피" src="profile3.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-939-0512</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 산격동 1321-9</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)41544</div>
              </div>
              <div className="address">
                <div className="text-address">대구 북구 대학로23길 9</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">어썸브루커피</div>
              </div>
              
              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">6개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>




            <div className="store3">

              <img className="storeProfile" alt="낭만놀이" src="profile2.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-264-7442</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 산격동 1309-15</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)41544</div>
              </div>
              <div className="address">
                <div className="text-address">대구 북구 대학로23길 18-9 1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">낭만놀이</div>
              </div>
              
              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">0개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>
            


            <div className="store4">
              
              <img className="storeProfile" alt="벨로" src="profile1.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">0507-1414-3994</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 산격동 1308-22</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)41544</div>
              </div>
              <div className="address">
                <div className="text-address">대구 북구 대학로23길 114 1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">벨로</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">2개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>
          </div>
        </div>




        {/* 헤더(네비게이터)는 미수정 */}
        {/* <div className="navigator">
          <div className="view">
            <div className="singUp">
              <div className="text-signUpNLogin">회원가입</div>
            </div>
            <div className="logIn">
              <div className="text-signUpNLogin">로그인</div>
            </div>
          </div>
          <div className="naviList">
            <div className="findUmb">
              <div className="text-list">우산 찾기</div>
            </div>
            <div className="umbEnroll">
              <div className="text-list">우산 재고 등록</div>
            </div>
            <div className="storeInfo">
              <div className="text-list">가게 정보 등록</div>
            </div>
            <div className="notice">
              <div className="text-list">공지사항</div>
            </div>
          </div>
          <div className="Logo">
            <div className="text-logo">BP해</div>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default Findpage1;
