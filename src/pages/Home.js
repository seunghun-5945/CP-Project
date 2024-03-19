import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ItemFrame = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 3%;
`;

const ItemFrameLeft = styled.div`
  width: 50%;
  display: flex;
  border-Right: 1px solid black;
  align-items: center;
`;

const ItemFrameRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const StateBox = styled.div`
  width: 25%;
  height: 40%;
  border: 1px solid black;
`;

const Item = () => {
  return (
    <ItemFrame>
      <ItemFrameLeft>
        <StateBox style={{width:"40%" , height:"80%"}}></StateBox>
        <StateBox style={{width:"60%" , height:"80%"}}></StateBox>
      </ItemFrameLeft>

      <ItemFrameRight>
        <StateBox>입찰준비중</StateBox>
        <StateBox>남은기간 /  </StateBox>
        <StateBox></StateBox>
        <StateBox style={{borderRight:"none"}}>조회수 / 800</StateBox>
      </ItemFrameRight>
    </ItemFrame>
  )
}

const HomeContent = () => {
  return (
    <Container>
      <Banner />
      <h2 style={{marginTop:"3%"}}>마감 인박 경매</h2>
      <Frame>
        <Item />
        <Item />
        <Item />
      </Frame>
      <h2 style={{marginTop:"3%"}}>최근에 등록된 경매</h2>
    </Container>
  )
}

const Home = () => {
  return (
    <Layout props={<HomeContent />} />
  )
};
export default Home;