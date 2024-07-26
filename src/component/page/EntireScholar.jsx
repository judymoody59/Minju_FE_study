import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import scholarships from "../data";

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
        padding: "12px"

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
    circle: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid #348a8c", // 테두리 색상
        display: "inline-block"
        
    },
    filledCircle: {
        backgroundColor: "#348a8c" // 채워진 동그라미 색상
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
                    <button style={styles.sortButton}>기한 순 ▼</button>
                </div>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>장학 재단명</th>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>장학 사업명</th>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>기한</th>
                            <th style={{ ...styles.firstThTd, ...styles.th }}>이전 수혜자 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                    {scholarships.map((scholarship, index) => (
                            <tr key={index}>
                                <td style={styles.thTd}>{scholarship.scholarname}</td>
                                <td style={styles.thTd}>{scholarship.businessname}</td>
                                <td style={styles.thTd}>{scholarship.period}</td>
                                <td style={styles.thTd}><button style={styles.infoButton}>정보 보러가기</button>
                                <td style={styles.thTd}>
                                <div style={styles.flexContainer}>
                                    <button style={styles.infoButton}>정보 보러가기</button>
                                    <button
                                        style={styles.heartButton}
                                        onClick={() => handleLikeClick(index)}
                                    >
                                        <span
                                            style={{
                                                ...styles.circle,
                                                ...(likes[index] && styles.filledCircle)
                                            }}
                                        />
                                    </button>
                                </div>
                                </td>
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