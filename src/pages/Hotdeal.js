import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SmallItem from "../components/SmallItem";

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

  const LargeFrame = styled.div`
    width: 90%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    border: 1px solid black;
  `;

    const ImgBox = styled.div`
      width: 18%;
      height: 80%;
      display: flex;
      align-items: flex-end;
      border: 1px solid black;
    `;

    const TextBox = styled.div`
      width: 50%;
      height: 80%;
      border: 1px solid black;
    `;

    const StyledButton = styled.div`
      width: 100%;
      height: 30%;
      border: 1px solid gray;
      background-color: salmon;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: white;
    `;

  const LargeItem = () => {
    return (
      <LargeFrame>
        <ImgBox />
        <TextBox />
        <ImgBox style={{border: "none"}}>
          <StyledButton>핫딜상품 구매하기</StyledButton>
        </ImgBox>
    </LargeFrame>
    );
  };

const SmallFrameArea = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const HotdealContent = () => {
  return (
    <Container>
      <LargeItem/>
      <SmallFrameArea>
        <SmallItem/>
        <SmallItem/>
        <SmallItem/>
        <SmallItem/>
        <SmallItem/>
        <SmallItem/>
      </SmallFrameArea>
    </Container>
  );
}

const Hotdeal = () => {
  return <Layout props={<HotdealContent/>} />
};

export default Hotdeal;