import React from "react";
import styled from "styled-components";

const SmallFrame = styled.div`
width: 48%;
height: 150px;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 20px;
border: 1px solid black;
`;

  const ImgBox = styled.div`
  width: 20%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  `;

  const TextBox = styled.div`
  width: 40%;
  height: 80%;
  `;

    const TitleTextArea = styled.div`
      width: 100%;
      height: 40%;
      border-bottom: 1px solid lightgray;
    `;

    const ExplanationArea = styled.div`
      width: 100%;
      height: 30%;
    `;

    const PriceArea = styled.div`
      width: 100%;
      height: 30%;
    `;

  const StyledButton = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 15px;
  background-color: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  `;

const SmallItem = () => {
  return (
    <SmallFrame>
      <ImgBox/>
      <TextBox>
        <TitleTextArea>
          <h3>이런 상품은 어떠신가요?</h3>
        </TitleTextArea>
        <ExplanationArea>
          <h4>해병3분 짜장</h4>
        </ExplanationArea>
        <PriceArea>
          <span>현재 시작가: 100원</span>
        </PriceArea>
      </TextBox>
      <ImgBox style={{border:"none"}}>
        <StyledButton>입찰하기</StyledButton>
      </ImgBox>
    </SmallFrame>
  );
};

export default SmallItem;