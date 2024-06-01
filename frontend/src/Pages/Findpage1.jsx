import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Findpage1.css";

const Findpage1 = () => {
  const [location, setLocation] = useState({  lat: 35.8576603857473, lng: 128.62515087238  }); // 기본 좌표 (대구)
  const [address, setAddress] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [stores, setStores] = useState([]); // 가게 정보 상태 추가
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

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
          const { kakao } = window;
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
          timeout: 4000,
          maximumAge: 0,
        }
      );
    }
    
  }, []);

  // 서버에서 가게 정보 가져오기
  useEffect(() => {
    axios.get("https://35.208.234.110:8080/api/stores")
      .then(response => {
        setStores(response.data);
      })
      .catch(error => {
        console.error("Error fetching stores: ", error);
      });
  }, []);

  // 지도가 존재하는지 확인하고, 페이지 요소들이 모두 렌더링된 이후 지도를 생성
  useEffect(() => {
    if (mapLoaded) {
      const { kakao } = window;

      // 카카오 맵 API를 사용하여 지도를 생성합니다.
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(location.lat, location.lng),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      // const stores = [
      //   {
      //     name: "낭만놀이",
      //     address: "대구 북구 대학로23길 18-9 1층",
      //     latlng: new kakao.maps.LatLng(35.894922, 128.611447),
      //     umbrellaCnt: 0,
      //   },
      //   // 다른 가게 정보도 추가할 수 있습니다.
      //   {
      //     name: "어썸브루커피",
      //     address: "대구 북구 대학로23길 9",
      //     latlng: new kakao.maps.LatLng(35.8945465587138, 128.610787481871),
      //     umbrellaCnt: 6,
      //   },
      // ];

      

      // 마커를 클릭했을 때 정보를 표시하는 윈도우를 생성합니다.
      stores.forEach((store, index) => {
        const markerImage = new kakao.maps.MarkerImage(
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          new kakao.maps.Size(24, 35),
          {
            offset: new kakao.maps.Point(27, 69),
          }
        );

        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: store.latlng, // 마커를 표시할 위치
          title: store.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지 
        });

        const infoWindows = stores.map(store => {
        const content = `
          <div class="info-window">
            <h3>${store.name}</h3>
            <p>${store.address}</p>
            <p>현재 보유 우산: ${store.umbrellaCnt}개</p>
          </div>
        `;
        return new kakao.maps.InfoWindow({
          content: content,
          });
        });

        kakao.maps.event.addListener(marker, 'click', function() {
          infoWindows.forEach((win, idx) => {
            if (index === idx) {
              if (win.getMap()) {
                win.close();
              } else {
                win.open(map, marker);
              }
            } else {
              win.close();
            }
          });
        });
      });

      const markerPosition = new kakao.maps.LatLng(location.lat, location.lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [location, mapLoaded]);

  useEffect(() => {
    if (document.getElementById("map")) {
      setMapLoaded(true);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


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
            {/* <div className="text-search">상호명 및 주소를 검색해주세요</div> */}
            <input
              type="text"
              className="text-search"
              placeholder="상호명 및 주소를 검색해주세요"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* 팝업창 : 가게목록 */}
          <div className="store-list">
            <img className="image" alt="가게목록윗선" src="line-storelistupper.png" />

            <div className="store1">
              
              <img className="storeProfile" alt="커피맛을조금아는남자" src="./profile/커조남.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">070-4155-4601</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 수성동4가 985-5</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42017</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 범어천로 153</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">커피맛을조금아는남자</div>
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

            <div className="store2">

              <img className="storeProfile" alt="스위트인디아" src="./profile/스위트 인디아.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-741-4624</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 562-2</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42117</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구벌대로480길 5 2층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">스위트인디아</div>
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


            <div className="store3">

              <img className="storeProfile" alt="아눅베이커스" src="./profile/아눅.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-759-1060</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 592-7</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42117</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 동대구로58길 15</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">아눅베이커스</div>
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

            
            <div className="store4">

              <img className="storeProfile" alt="마라신" src="./profile/마라신.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-218-8058</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 790-3</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42117</div>
              </div>
              <div className="address">
                <div className="text-address">대구광역시 수성구 동대구로59길 12</div>     {/* text-address css 효과 없음 */}
              </div>
              <div className="storeName">
                <div className="text-storeName">마라신</div>
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



            
            


            
            
            <div className="store5">
              
              <img className="storeProfile" alt="팝테니스 수성" src="./profile/팝테니스수성.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">010-5505-0055</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 수성동4가 999-1</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42016</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구벌대로 2353 삼구빌딩 2층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">팝테니스 수성</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">3개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store6">
              
              <img className="storeProfile" alt="KB국민은행" src="./profile/국민은행.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">1588-9999</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 197-2</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42087</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구벌대로 2470 동신빌딩 1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">KB국민은행</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">10개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store7">
              
              <img className="storeProfile" alt="NH농협은행 수성동지점" src="./profile/농협은행.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-754-9531</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 수성동3가 251</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42115</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구벌대로 2340</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">NH농협은행 수성점</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">15개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store8">
              
              <img className="storeProfile" alt="스마트치과의원 수성점" src="./profile/스마트치과의원.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-721-9999</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 수성동4가 1085-37</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42006</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구벌대로 2319-8 스마트스퀘어4-6층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">스마트치과의원</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">7개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>
            

            <div className="store9">
              
              <img className="storeProfile" alt="대구수성우체국" src="./profile/수성우체국.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-757-1112</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 수성동2가 118-2</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42123</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구벌대로 2320</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">대구수성우체국</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">20개</div>
                  </div>
                </div>
              </div>

              

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>


            <div className="store10">
              
              <img className="storeProfile" alt="신청궁전떡볶이" src="./profile/신천궁전떡볶이.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-741-4158</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 1003-18</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42009</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 국채보상로162길 72</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">신청궁전떡볶이</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">3개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store11">
              
              <img className="storeProfile" alt="수성구립 범어도서관" src="./profile/범어도서관.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-668-1600</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 405-16</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42027</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구별대로 2451</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">수성구립 범어도서관</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">14개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>


            <div className="store12">
              
              <img className="storeProfile" alt="맛찬들왕소금구이 대구범어점" src="./profile/맛찬들.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-745-6692</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 560-11</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42117</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 범어천로 136 12층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">맛찬들소금구이</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">18개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>


            <div className="store13">
              
              <img className="storeProfile" alt=" 키츠네소바" src="./profile/키츠네소바.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber"></div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 153-1</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42029</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구별대로489길 61-26 지하1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">키츠네소바</div>
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

            <div className="store14">
              
              <img className="storeProfile" alt="막창도둑 범어점" src="./profile/막창도둑.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-743-4040</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 262-1</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42094</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 범어로 81 1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">막창도둑 범어점</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">4개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store15">
              
              <img className="storeProfile" alt="범어동산교회" src="./profile/범어동산교회.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-742-7743</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 142-29</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42025</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 국채보상로186길 13</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">범어동산교회</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">13개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store16">
              
              <img className="storeProfile" alt="범어4동 행정복지센터" src="./profile/행정복지센터.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-666-2000</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 2265</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42088</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구별대로504길 26</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">범어4동 행정복지센터</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">22개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store17">
              
              <img className="storeProfile" alt="조조칼국수" src="./profile/조조칼국수.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-743-8887</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 128-28</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42021</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 국채보상로 912</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">조조칼국수</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">5개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store18">
              
              <img className="storeProfile" alt="롤링핀 대구범어점" src="./profile/롤링핀.jpg" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-752-9955</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 292-15</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42006</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구별대로496길 50 1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">롤링핀 대구범어점</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">1개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store19">
              
              <img className="storeProfile" alt="굳센병원" src="./profile/굳센병원.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-710-0500</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 1806</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42006</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 국채보상로 830</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">굳센병원</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">12개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

            <div className="store20">
              
              <img className="storeProfile" alt="오크커피" src="./profile/오크커피.png" />

              <div className="phoneNumber">
                <div className="text-phoneNumber">053-751-6777</div>
              </div>
              <div className="regionNumber">
                <div className="text-regionNumber">(지번) 범어동 203-24</div>
              </div>
              <div className="postalCode">
                <div className="text-postalCode">(우)42087</div>
              </div>
              <div className="address">
                <div className="text-address">대구 수성구 달구별대로 496길 11 sj빌딩 1층</div>
              </div>
              <div className="storeName">
                <div className="text-storeName">오크커피</div>
              </div>

              <div className="umbrellaCntFrame">
                <div className="umbrellaCntStroke">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">3개</div>
                  </div>
                </div>
              </div>

              <img className="image-2" alt="아래선_가게" src="line-storelistlower.png" />
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Findpage1;