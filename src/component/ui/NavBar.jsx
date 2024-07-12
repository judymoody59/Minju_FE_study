import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e0e0e0;
    margin: 0 auto; /* 중앙 정렬 */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
    }
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #007bff;

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 24px;
    margin-left: auto; /* 네비게이션 링크를 오른쪽으로 밀어줌 */
    padding-right: 16px; /* 오른쪽 여백 추가 */

    a {
        text-decoration: none;
        color: #333;
        font-weight: 500;

        &:hover {
            color: #007bff;
        }
    }
`;

function NavBar() {
    return (
        <NavBarWrapper>
            <Logo></Logo>
            <NavLinks>
                <Link to="/entirescholar">전체 장학금 목록</Link>
                <Link to="/mypage">마이페이지</Link>
                <Link to="/points">포인트</Link>
            </NavLinks>
        </NavBarWrapper>
    );
}

export default NavBar;