import React from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "../Styles/BorrowReturn.css";  

const BorrowReturn = () => {   
    const navigate = useNavigate();
    const params = useParams();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const onClick1 = () => {
        alert("대여했습니다.")
        const data = {
            umbCnt: 1,
            params: params
        }

        // Axios를 사용하여 POST 요청을 보냅니다.
        axios.post('https://35.208.234.110:8080/api/umbrellas/1/borrow', data)
        .then(response => {
            // 서버로부터의 응답을 처리합니다.
            console.log('Response:', response.data);
            alert('주소 정보가 성공적으로 등록되었습니다.');
        })
        .catch(error => {
            // 오류가 발생한 경우 처리합니다.
            console.error('Error:', error);
            alert('주소 정보 등록 중 오류가 발생했습니다.');
        });
    }

    const onClick2 = () => {
        alert("반납했습니다.")
        const data = {
            umbCnt: -1,
            params: params
        }

        // Axios를 사용하여 POST 요청을 보냅니다.
        axios.post('https://35.208.234.110:8080/api/umbrellas/1/return', data)
        .then(response => {
            // 서버로부터의 응답을 처리합니다.
            console.log('Response:', response.data);
            alert('주소 정보가 성공적으로 등록되었습니다.');
        })
        .catch(error => {
            // 오류가 발생한 경우 처리합니다.
            console.error('Error:', error);
            alert('주소 정보 등록 중 오류가 발생했습니다.');
        });
    }

    return (     
        <div className="BorrowReturn">       
            <div className="div">         
                <div className="background">  
                    
                    <div className="upperSide">             
                        <div className="text-page">대여 / 반납하기</div>           
                    </div>      

                    <div className="middleSide">
                        <div className="text-borrow">우산 대여를 원하신다면?</div>
                        <button className="borButton" onClick={onClick1}>대여하기</button>
                        <div className="text-return">우산 반납을 원하신다면?</div>
                        <button className="retButton" onClick={onClick2}>반납하기</button>
                    </div>
                </div>         
            </div>     
        </div>   
    ); 
};

export default BorrowReturn;