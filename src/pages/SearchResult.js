import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 100vh;
`;

const SmallArea = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid black;
`;

const LargeArea = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;

const SearchResultContent = (  ) => {

  return (
    <Container>
      <SmallArea>
        <h1>'가방' 검색결과</h1>
      </SmallArea>
      <LargeArea>
        <SmallArea>카테고리</SmallArea>
        <SmallArea>가격</SmallArea>
        <SmallArea>옵션</SmallArea>
      </LargeArea>
    </Container>
  );
};

const SearchResult = () => {
  return <Layout props={<SearchResultContent/>}/>
};

export default SearchResult;