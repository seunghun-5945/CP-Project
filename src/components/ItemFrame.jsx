import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 220px;
  height: 350px;
  margin-right: 25px; /* 기본 margin-right 값 */
  img {
    width: 100%;
    height: 100%;
  }
  cursor: pointer;
  &:nth-child(5n) {
    margin-right: 0; /* 5번째 아이템마다 margin-right을 0으로 설정 */
  }
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 230px;
  border: solid 1px #eeeeee;
  border-bottom: none;
`;

const TextFrame = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  border: solid 1px #eeeeee;
  border-top: none;
  padding: 5% 5% 5% 5%;
  font-weight: 500;
  span {
    font-size: 15px;
    padding: 3px;
  }
  p {
    color: #abacab;
    font-size: 14px;
    font-weight: 400;
  }
`;

const ItemFrame = ({ Product, Price, Image, Array = {}}) => {
  const navigate = useNavigate();

  const handleDetailPost = () => {
    navigate('/Bid', {
      state: {
        data: Array,
        timeDifference: formatTimeDifference(timeDifference)
      },
    });
  };

  const truncatedProduct = Product.length > 11 ? Product.substring(0, 10) + "..." : Product;
  const formattedPrice = Price.toLocaleString();

  // Adjust start_time by adding 9 hours
  const startTime = new Date(Array.start_time);
  startTime.setHours(startTime.getHours() + 9);
  const now = Date.now();
  const timeDifference = now - startTime.getTime();

  const formatTimeDifference = (timeDiff) => {
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else if (minutes > 0) {
      return `${minutes}분 전`;
    } else {
      return `${seconds}초 전`;
    }
  };

  return (
    <Container>
      <ImageFrame onClick={handleDetailPost}>
        <img src={Image} alt="로딩중" />
      </ImageFrame>
      <TextFrame style={{ borderBottom: "none" }}>
        {truncatedProduct}
      </TextFrame>
      <TextFrame style={{ fontSize: "20px", fontWeight: "bold" }}>
        <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{formattedPrice}<span>원</span></h4>
        <p>{formatTimeDifference(timeDifference)}</p>
      </TextFrame>
    </Container>
  );
};

export default ItemFrame;
