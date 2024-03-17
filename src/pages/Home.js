import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const TextBox = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid black;
  margin-top: 5%;
`;

const HomeContent = () => {
  return (
    <>
      <Banner />
      <TextBox>
        <h1>핫딜!</h1>
      </TextBox>
      <TextBox>
        <h1>인기 아이템</h1>
      </TextBox>
    </>
  )
}

const Home = () => {
  return (
    <Layout props={<HomeContent />} />
  )
};
export default Home;