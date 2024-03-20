import React from "react";
import styled from "styled-components";

const ItemFrame = styled.div`
  width: 220px;
  height: 350px;
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
`;

const TextFrame = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid black;
`;

const Item = ( {Product, Price, Image} ) => {
  return (
    <ItemFrame>
      <ImageFrame>
        {Image}
      </ImageFrame>
      <TextFrame style={{marginTop:"12%"}}>
        {Product}
      </TextFrame>
      <TextFrame>
        {Price}
      </TextFrame>
      <TextFrame>
        
      </TextFrame>
    </ItemFrame>
  )
}

export default Item;