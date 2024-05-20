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
`;

const TextBox = styled.div`
width: 40%;
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

const SmallItem = () => {
  return (
    <SmallFrame>
      <ImgBox/>
      <TextBox/>
      <ImgBox/>
    </SmallFrame>
  );
};

export default SmallItem;