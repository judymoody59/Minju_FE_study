import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import scholarships from "../data";
import emptyheart from "../ui/emptyheart.jpeg";
import filledheart from "../ui/filledheart.jpeg";


const styles = {
    container: {
        margin: "20px",
        fontFamily: "Arial, sans-serif"
    },
    searchBar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px"
    },
    searchInput: {
        flex: 1,
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px"
    },
    sortButton: {
        marginLeft: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#348a8c",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
    dropdown: {
        position: "absolute",
        top: "100%",
        right: "0",
        backgroundColor: "white",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        zIndex: 1,
        borderRadius: "4px",
        overflowY: "auto", // 세로 스크롤바 추가
        maxHeight: "200px" // 최대 높이 설정
    },
    dropdownItem: {
        padding: "10px 20px",
        cursor: "pointer",
        whiteSpace: "nowrap"
    },
    dropdownItemHover: {
        backgroundColor: "#f1f1f1"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse"
    },
    thTd: {
        borderTop: "1px solid #348a8c",
        borderBottom: "1px solid #ddd",
        borderLeft: "0",
        borderRight: "0",
        textAlign: "left",
        padding: "12px",

    },
    th: {
        fontWeight: "bold",
        borderTop: "0"
    },
    firstThTd: {
        borderBottom: "2px solid #348a8c", 
        textAlign: "left",
        padding: "12px"
    },
    infoButton: {
        backgroundColor: "#348a8c",
        color: "white",
        border: "none",
        padding: "8px 16px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "14px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "4px"
    },
    flexContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between" 
    },
    heartButton: {
        background: "none",
        border: "none",
        cursor: "pointer",
        marginLeft: "60px"

    },
    heartImage: {
        width: "20px",
        height: "20px"
    },
    pagination: {
        marginTop: "20px",
        textAlign: "center"
    },
    paginationSpan: {
        cursor: "pointer",
        padding: "8px 16px",
        textDecoration: "none",
        color: "#348a8c"
    },
    paginationSpanHover: {
        textDecoration: "underline"
    }
};


function EntireScholar(props) {
    // 상태 관리
    const [likes, setLikes] = useState(Array(scholarships.length).fill(false));

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // 좋아요 버튼 클릭 핸들러
    const handleLikeClick = (index) => {
        const newLikes = [...likes];
        newLikes[index] = !newLikes[index];
        setLikes(newLikes);

    };
    return (
        <>
            <NavBar/>
            <div style={styles.container}>
                <div style={styles.searchBar}>
                    <input type="text" placeholder="검색" style={styles.searchInput} />
                    <button style={styles.sortButton}
                    onClick={toggleDropdown}>기한 순 ▼</button>
                    {dropdownVisible && (
                        <div style={styles.dropdown}>
                            <div style={styles.dropdownItem}>가나다순</div>
                            <div style={styles.dropdownItem}>좋아요순</div>
                        </div>
                    )}
                </div>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>장학 재단명</th>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>장학 사업명</th>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>기한</th>
                            <th style={{ ...styles.firstThTd, ...styles.th}}>이전 수혜자 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                    {scholarships.map((scholarship, index) => (
                            <tr key={index}>
                                <td style={styles.thTd}>{scholarship.scholarname}</td>
                                <td style={{ ... styles.thTd, paddingRight: "20px"}}>{scholarship.businessname}</td>
                                <td style={{ ...styles.thTd, paddingRight: "90px" }}>{scholarship.period}</td>
                                <td style={styles.thTd}>
                                <div style={styles.flexContainer}>
                                    <button style={styles.infoButton}>정보 보러가기</button>
                                    <button
                                        style={styles.heartButton}
                                        onClick={() => handleLikeClick(index)}
                                    >
                                        <img
                                                src={likes[index] ? filledheart : emptyheart}
                                                alt="heart"
                                                style={styles.heartImage}
                                            />
                                    </button>
                                </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" style={{borderBottom: "1px solid #348a8c"}}></td>
                        </tr>
                    </tfoot>
                </table>
                <div style={styles.pagination}>
                    <span style={styles.paginationSpan}>1 2 3 4 5</span>
                </div>
            </div>
        </>
    );

}
export default EntireScholar;