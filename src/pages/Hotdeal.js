import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
`;

const LargeBox = styled.div`
  width: 90%;
  height: 350px;
  border: 1px solid black;
`;

const HotdealContent = () => {
  return (
    <Container>
      <LargeBox></LargeBox>
    </Container>
  )
}

const Hotdeal = () => {
  return <Layout props={<HotdealContent/>} />
};

export default Hotdeal;