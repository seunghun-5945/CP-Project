import React from "react";
import styled from "styled-components";

const AddedMenuFrame = styled.div`
  width: 1400px;
  height: 300px;
  position: sticky;
  z-index: 10000;
  background-color: white;
  margin: auto;
  display: flex;
  align-items: center;
  justifty-content: center;
  flex-direction: row;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  ul {
    padding: 3% 0% 3% 0%;
  }

`;

const AddedMenu = () => {
  return (
    <AddedMenuFrame>
      <MenuBox style={{borderLeft: "1px solid black"}}>
        <ul>tqtqt</ul>
        <ul>asdasd</ul>
        <ul>asdasd</ul>
        <ul>asdasd</ul>
        <ul>asdasd</ul>
      </MenuBox>
      <MenuBox />
      <MenuBox />
      <MenuBox />
      <MenuBox />
      <MenuBox />
    </AddedMenuFrame>
  )
}

export default AddedMenu;