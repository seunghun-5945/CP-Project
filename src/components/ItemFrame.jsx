import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  height: 350px;
  border: 2px solid lightgray;
  background-color: #FAFAFA;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 200px;
  border-bottom: 2px solid lightgray;
`;

const TextFrame = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
`;

const ItemFrame = ( {Product, Price, Image} ) => {
  const truncatedProduct = Product.length > 11 ? Product.substring(0, 11) + "..." : Product;
  const formattedPrice = Price.toLocaleString();

  return (
    <Container>
      <ImageFrame>
        <img src={Image} />
      </ImageFrame>
      <TextFrame style={{marginTop:"12%"}}>
        {truncatedProduct}
      </TextFrame>
      <TextFrame>
        시작가: {formattedPrice} 원
      </TextFrame>
      <TextFrame>
        
      </TextFrame>
    </Container>
  )
}

export default ItemFrame;