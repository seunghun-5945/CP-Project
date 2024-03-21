import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import DropdownList from "../components/DropdownList";

const Container = styled.div`
  width: 1300px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

const FirstBox = styled.div`
  width: 1300px;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid black;
`;

const SecondBox = styled.div`
  width: 1300px;
  height: 400px;
  display: flex;
  border-bottom: 1px solid lightgray;
`;

const SecondBoxL = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid lightgray;
  align-items: flex-start;
`;

const SecondBoxR = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  align-items: center;
  justify-content: flex-start;
`;

const ImgFrame = styled.div`
  width: 30%;
  height: 75%;
  border: 1px solid black;
  background-image: url("images/regImg.png");
  background-size: 101% 101%;
`;

const InputBox = styled.div`
  width: 1300px;
  height: 150px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const InputBoxL = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const InputBoxR = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40%;
  font-size: 20px;
  padding-left: 3%;
`;

const FourthBox = styled.div`
  width: 1300px;
  height: 400px;
  display: flex;
  border-bottom: 1px solid lightgray;
`;

const FourthBoxL = styled.div`
  width: 20%;
  height: 100%;
`;

const FourthBoxR = styled.div`
  width: 80%;
  height: 100%;
`;

const FifthBox = styled.div`
  width: 1300px;
  height: 400px;
  border: 1px solid black;
`;

const AuctionContent = () => {

  const [count,setCount] = useState(0)

  return (
    <Container>
      <FirstBox>
        <h1>기본정보</h1>
        <h3 style={{color:"red" , marginLeft:"3%"}}>*필수입력항목</h3>
      </FirstBox>
      <SecondBox>
        <SecondBoxL>
          <h2 style={{marginTop:"20%"}}>상품이미지(12)</h2>
        </SecondBoxL>
        <SecondBoxR>
          <ImgFrame />
        </SecondBoxR>
      </SecondBox>
      <InputBox>
        <InputBoxL>
          <h2>상품명</h2>
        </InputBoxL>
        <InputBoxR>
          <StyledInput placeholder="상품명을 입력해주세요"/>
        </InputBoxR>
      </InputBox>
      <FourthBox>
        <FourthBoxL>
         <h2 style={{marginTop:"20%"}}>카테고리</h2>
        </FourthBoxL>
        <FourthBoxR>
          <DropdownList />
        </FourthBoxR>
      </FourthBox>
      <InputBox>
        <InputBoxL>
          <h2>가격</h2>
        </InputBoxL>
        <InputBoxR>
          <StyledInput placeholder="흥정 시작가격을 입력하세요"/>
        </InputBoxR>
      </InputBox>
      <FifthBox>
        
      </FifthBox>
    </Container>
  );
};

const Auction = () => {
  return <Layout props={<AuctionContent />}/>
};

export default Auction;