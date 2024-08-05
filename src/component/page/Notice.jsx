import React from 'react';
import styled from 'styled-components';
import NavBar from '../ui/NavBar';
import Loudspeaker from '../ui/Loudspeaker.jpeg';
import LightBulb from '../ui/LightBulb.jpeg';

const Container = styled.div`
    margin: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin-top: 60px;
`;

const Section = styled.div`
    margin-left: 100px;
    margin-bottom: 20px;
`;

const Title = styled.h2`
    font-size: 1.2em;
    margin-bottom: 10px;
`;

const TitleWithIcon = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Icon = styled.img`
    margin-right: 8px; /* 아이콘과 텍스트 사이 간격 */
    width: 20px; 
    height: 20px; 
`;

const Icon2 = styled.img`
    margin-right: 8px; /* 아이콘과 텍스트 사이 간격 */
    width: 15px; 
    height: 20px; 
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;
const HighlightBox = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    background-color: rgba(52, 138, 140, 0.19);
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px; /* 상단 마진 추가 */
`;

const WarningBox = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    background-color: #e0e0e0 ;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px; /* 상단 마진 추가 */
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

const Notice = () => {
    return (
        <>
        <NavBar />
        <Container>
            <Section>
                <Title>신청 기간</Title>
                <p>2024.04.29 ~ 2024.05.28</p>
            </Section>

            <Section>
                <Title>선발인원</Title>
                <List>
                    <ListItem>총 330명</ListItem>
                    <ListItem>고졸자 93명</ListItem>
                    <ListItem>학부생 189명</ListItem>
                    <ListItem>대학원생 48명</ListItem>
                </List>
            </Section>

            <Section>
                <Title>장학혜택</Title>
                <List>
                    <ListItem>학업장려비 최대 150만원</ListItem>
                    <ListItem>교재비 50만원</ListItem>
                    <ListItem>생활비 50만원</ListItem>
                    <ListItem>대학원 100만원</ListItem>
                    <ListItem>해외연수 기회 제공</ListItem>
                    <ListItem>발표회 진행한 기수와차 신설 계획</ListItem>
                </List>
            </Section>

            <Section>
                <Title>접수 방법</Title>
                <List>
                    <ListItem>접수 장소: 공공 및 해당 학교장기관 (교육청, 자치구, 각 추천기관 등)</ListItem>
                    <ListItem>접수 시기: 3월 ~ 4월 초</ListItem>
                </List>
            </Section>

            <Section>
                <Title>지원 대상</Title>
                <p>중학생, 고등학생, 대학생, 학교 밖 청소년</p>
            </Section>

            <Section>
                <Title>신청 자격</Title>
                <List>
                    <ListItem>[가정 및 사회환경]</ListItem>
                    <ListItem>저소득 가정 자녀, 다문화가정 자녀, 한부모 가정 자녀</ListItem>
                    <ListItem>[학업 성적]</ListItem>
                    <ListItem>최근 학기 성적이 상위 30% 이상인 자</ListItem>
                    <ListItem>[기타]</ListItem>
                    <ListItem>사회봉사활동에 적극 참여한 자</ListItem>
                </List>
            </Section>

            <HighlightBox>
                <TitleWithIcon>
                    <Icon src={Loudspeaker} alt="Loudspeaker Icon" />
                    <Title> 이런 사람이 장학금을 받았어요!</Title>
                </TitleWithIcon>
                <p>대체적으로 가정형편이 좋지 않거나 소득 분위가 낮은 학생들이 많이 수혜했어요. 지원서 제출은 물론 면접도 있기 때문에 지원서 내용을 잘 익히고 면접에서 떨지 않고 잘 말한 사람들이 많이 합격했어요. </p>
            </HighlightBox>
            <WarningBox>
                <TitleWithIcon>
                    <Icon2 src={LightBulb} alt="LightBulb Icon" />
                    <Title> 신청할 때는 각 장학금의 세부적인 기준과 마감일을 다시 한번 확인하시기 바랍니다.</Title>
                </TitleWithIcon>
                <p>사용자가 확인하지 않아 발생하는 문제에 대해서는 Scholli 측에서 책임을 지지 않으며, 모든 책임은 전적으로 사용자에게 있습니다.</p>
            </WarningBox>
        </Container>
        </>
    );
};

export default Notice;