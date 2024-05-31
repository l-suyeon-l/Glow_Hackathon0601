import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Navigator.css';

function Navigator() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // 화면 크기에 따라서 버튼이 보이고 안보이도록 설정한다(반응형)
    const showButton = () => {
        if (window.innerWith <= 960) {
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    // signUp 버튼이 사이즈가 줄어들면 없어지도록 한다.
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        {/* 미로그인 네비게이터 */}
         <nav className = 'navigator'>
            <div className = 'nav-container'>

                {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. */}
                <Link to='/' className='nav-logo'>
                    비헬프
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/Findpage1' className='nav-links' onClick = {closeMobileMenu}>
                            우산 찾기
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Umbenroll1' className='nav-links' onClick = {closeMobileMenu}>
                            우산 재고 등록
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/StoreInfo' className='nav-links' onClick = {closeMobileMenu}>
                            가게 정보 등록
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='#' className='nav-links' onClick = {closeMobileMenu}>
                            공지사항
                        </Link>
                    </li>
                </ul>

                <ul className={click ? 'nav-menu active' : 'nav-menu2'}>
                {/* <ul> */}
                    <li className="nav-item2">
                        <Link to='/login' className='nav-links2' onClick = {closeMobileMenu}>
                            로그아웃
                        </Link>
                    </li>
                    <li className="nav-item2">
                        <Link to='/signUp' className='nav-links2' onClick = {closeMobileMenu}>
                            마이페이지
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navigator;














// import React from "react";
// import { NavLink } from "react-router-dom";
// import './Navigator.css';

// const Navigator = () => {
//     return (
//     <div className="NavigatorP">
//       <div className="overlap-group-wrapper">
//         <div className="overlap-group">
          
//           {/* navigator */}
//           <div className="navigator">
//             {/* 회원가입 / 로그인 */}
//             <div className="view-right">
//               <div className="SignUp">
//                 <div className="text-sign">회원가입</div>
//               </div>
//               <div className="Login">
//                 <div className="text-sign">로그인</div>
//               </div>
//             </div>
//             {/* 우산 찾기 / 우산 재고 등록 / 가게 정보 등록 / 공지사항 */}
//             <div className="view-middle">
//               <div className="element">
//                 <div className="text-notice">공지사항</div>
//               </div>
//               <div className="element-2">
//                 <div className="text-storeinfo">가게 정보 등록</div>
//               </div>
//               <div className="element-3">
//                 <div className="text-umbrella">우산 재고 등록</div>
//               </div>
//               <div className="element-4">
//                 <div className="text-umbrella">우산 찾기</div>
//               </div>
//             </div>
//             {/* 로고 */}
//             <div className="view-left">
//               <div className="Logo">BP해</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Navigator