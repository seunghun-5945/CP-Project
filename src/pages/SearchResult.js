import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border: 1px solid black;
`;

const SearchResultContent = ( {propsText} ) => {

  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <h1>{"'" + {propsText} + "'" + "검색결과"}</h1>
    </Container>
  );
};

const SearchResult = () => {
  return <Layout props={<SearchResultContent/>}/>
};

export default SearchResult;