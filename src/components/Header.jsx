import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import InjeIcon from './inje.svg';

const Container = styled.div`
  width: 100%;
  height: 20vh;
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const Frame = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const SiteMap = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  ul {
    margin: 0% 2% 0% 2%;
  }

  a {
    width: 10%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  a {
    width: 110px;
  }
`;

const TitleLeft = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    font-size: 40px; 
    font-weight: bold;
  }

  a {
    width: 230px;
    display: flex;
    align-items: center;
    justity-content: center;
  }

  h1 {
    font-size: 45px;
    color: salmon;
  }

  img {
    width: 25%;
    margin-right: 3%;
  }
`;

const TitleRight = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  h2 {
    font-size: 20px;
    margin: 0% 2% 0% 2%;
  }
`;

const StyleInput = styled.input`
  width: 70%;
  margin-left: 2%;
  padding: 1% 0% 1% 1%;
  font-size: 20px;
  border: 2px solid salmon;
  background-color: rgb(247,247,247)
`;

const LinkStyle = {
  textDecoration: "none",
  color: "black",
  margin: "0px",
  display: "flex",
}

const NavBarContent = () => {
  return (
    <>
      <ul>카테고리</ul>
      <ul>중고경매</ul>
      <ul>핫 템</ul>
      <ul>이벤트</ul>
      <ul>커뮤니티</ul>
      <ul>고객지원</ul>
    </>
  )
}

const Header = () => {
  return (
    <Container>
      <Frame>
        <SiteMap>
          <Link to="/SignIn" style={LinkStyle}>
            <ul>로그인 / 회원가입</ul>
          </Link>
            <ul>고객센터</ul>
        </SiteMap>
        <Title>
          <TitleLeft>
            <Link to="/" style={LinkStyle}>
                <img src="/images/BebidIcon.png" />
                <h1>BE BID</h1>
            </Link>
            <StyleInput placeholder="검색어를 입력해주세요"/>
          </TitleLeft>
          <TitleRight>
            <Link to="/Auction" style={LinkStyle}>
              <h2>경매올리기</h2>
            </Link>
            <h2>시세조회</h2>
            <Link to="/MyPage" style={LinkStyle}>
              <h2 style={{marginRight:"5%"}}>마이페이지</h2>
            </Link>
          </TitleRight>
        </Title>
        <NavBar props={<NavBarContent/>} />
      </Frame>
    </Container>
  );
};

export default Header;