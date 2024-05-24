import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  min-height: 57vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = styled.div`
  max-width: 1920px;
  min-width: 1200px;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Layout = ( {props} ) => {
  return (
    <>
    <Container>
      <Header /> {/* 18vh */}
      <Main>  {/* 57vh */}
      {props}
      </Main>
    </Container>
      <Footer />  {/* 25vh */}
    </>
  );
};

export default Layout;