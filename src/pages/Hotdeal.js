import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SmallItem from "../components/SmallItem";

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `;

      const TitleTextArea = styled.div`
        width: 100%;
        height: 40%;
        border-bottom: 1px solid lightgray;
        display: flex;
      `

      const ExplanationArea = styled.div`
        width: 100%;
        height: 30%;
        display: flex;
      `;

      const PriceArea = styled.div`
        width: 100%;
        height: 30%;
      `;

    const StyledButton = styled.div`
      width: 100%;
      height: 30%;
      border-radius: 20px;
      background-color: salmon;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: white;
      cursor: pointer;
    `;

  const LargeItem = () => {
    return (
      <LargeFrame>
        <ImgBox />
        <TextBox>
          <TitleTextArea>
          <h1 style={{whiteSpace: "pre-wrap"}}>TODAY </h1><h1>PICK</h1>
          </TitleTextArea>
          <ExplanationArea>
            <h3>요즘 제일 핫해! 어떤어떤 아이템</h3>
          </ExplanationArea>
          <PriceArea>
            <h2>현재 시작가: 100000원</h2>
          </PriceArea>
        </TextBox>
        <ImgBox style={{border: "none"}}>
          <StyledButton>핫딜상품 입찰하기</StyledButton>
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
      <ExplanationArea>
      <h2 style={{marginTop:"15px", whiteSpace: "pre-wrap"}}>핫딜 추천 상품 </h2>
      <h3 style={{marginTop:"20px"}}>| BEBID 에서 현재 인기있는 경매품목입니다.</h3>
      </ExplanationArea>

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