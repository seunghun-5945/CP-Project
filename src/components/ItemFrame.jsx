import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  height: 350px;
  border: 1px solid black;
  background-color: #FAFAFA;
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
`;

const TextFrame = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid black;
`;

const ItemFrame = ( {Product, Price, Image} ) => {

  return (
    <Container>
      <ImageFrame>
        <img src={Image} style={{backgroundSize:"cover"}}/>
      </ImageFrame>
      <TextFrame style={{marginTop:"12%"}}>
        {Product}
      </TextFrame>
      <TextFrame>
        {Price}
      </TextFrame>
      <TextFrame>
        
      </TextFrame>
    </Container>
  )
}

export default ItemFrame;