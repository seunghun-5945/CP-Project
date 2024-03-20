import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";
import Item from "../components/Item";
import Items from "../json/Item.json";

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 1400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HomeContent = () => {

  return (
    <Container>
      <Banner />
      <SubBanner />
      <h2 style={{marginTop:"3%"}}>마감 인박 경매</h2>
      <Frame>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Frame>
    </Container>
  )
}

const Home = () => {
  return (
    <Layout props={<HomeContent />} />
  )
};
export default Home;