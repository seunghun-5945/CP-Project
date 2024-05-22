import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SmallItem from "../components/SmallItem";
import axios from "axios";

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

  const LargeItem = ( {startprice, title} ) => {
    return (
      <LargeFrame>
        <ImgBox />
        <TextBox>
          <TitleTextArea>
          <h1 style={{whiteSpace: "pre-wrap"}}>TODAY </h1><h1>PICK</h1>
          </TitleTextArea>
          <ExplanationArea>
            <h3>요즘 제일 핫해! {title}</h3>
          </ExplanationArea>
          <PriceArea>
            <h2>현재 시작가: {startprice}원</h2>
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

  const [LargeDataTitle, setLargeDataTitle] = useState();
  const [LargeDataPrice, setLargeData] = useState();
  const [Data, setData] = useState({})

  const API_KEY = 'AIzaSyAxAqJYZSKbF7pm5XHril-dndv4HdVrbz4';
  const DRIVE_FOLDER_ID = '1-1w_h8t3ICtJRC57iUuTG-Mwy5sUFXJQ';
  const FILE_NAME = '202404031640073ee624efd45c646d738d0ded223b2e5c.jpg'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get(`https://www.googleapis.com/drive/v3/files?q=name='${FILE_NAME}'+and+'${DRIVE_FOLDER_ID}'+in+parents&fields=files(id,name,thumbnailLink)`, {
          params: {
            key: API_KEY,
            pageSize: 1
          }
        });
        console.log(response.data.files[0])
      }
      catch {

      }
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app/api/users/hotdeals_contents');
        console.log(response.data);
        setData(response.data)
        setLargeData(response.data[0].startprice)
        setLargeDataTitle(response.data[0].title)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const smallItems = [Data[0], Data[1], Data[2], Data[3], Data[4], Data[5], Data[6]]

  return (
    <Container>
        <LargeItem
          title={LargeDataTitle}
          startprice={LargeDataPrice}
        />
      <ExplanationArea>
      <h2 style={{marginTop:"15px", whiteSpace: "pre-wrap"}}>핫딜 추천 상품 </h2>
      <h3 style={{marginTop:"20px"}}>| BEBID 에서 현재 인기있는 경매품목입니다.</h3>
      </ExplanationArea>
      <SmallFrameArea>
      {smallItems.slice(1, 7).map((item, index) => (
        <SmallItem 
          key={index} {...item} 
        />
      ))}
      </SmallFrameArea>
    </Container>
  );
}

const Hotdeal = () => {
  return <Layout props={<HotdealContent/>} />
};

export default Hotdeal;