import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const TextBox = styled.div`
  height: 40vh;
`;

const HomeContent = () => {
  return (
    <>
      <h1>asdsad</h1>
      <TextBox />
      <TextBox />
    </>
  )
}

const Home = () => {
  return (
    <Layout props={<HomeContent />} />
  )
};
export default Home;