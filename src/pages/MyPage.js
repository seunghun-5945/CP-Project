import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { IoIosArrowBack } from "react-icons/io";

const Frame = styled.div`
  width: 1300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(238, 238, 238);
  margin-top: 5%;
`;

const Header = styled.div`
  margin-top: 100px;
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  border: solid 1px;

  h2 {
    font-size: 30px;
  }
`;

const Main = styled.div`
  width: 1300px;
  height: 100%;
`;

const MainMenu = styled.div`
  width: 20%;
  height: 100%;
  h2{
    margin-bottom: 20px;
  }
  li{
    list-style-type: none;
    margin-bottom: 20px;
  }
`

const Footer = styled.div`
  width: 1300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = () => {
  return (
    <>
      <p>hello</p>
    </>
  );
};

const MyPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Frame>
      <Header>
        <h2>마이페이지</h2>
      </Header>

      <Main>
        <MainMenu>
        <ul>
          <h2>내 정보</h2>
          <li>
          회원정보수정
          </li>
          <li>
            안녕하세요
          </li>
        </ul>

        <ul>
          <h2>거래 정보</h2>
          <li>
            구매내역
          </li>
          <li>
            판매내역
          </li>
        </ul>
        </MainMenu>
        
        {isModalOpen && <Modal props={<ModalContent />} onClose={closeModal}/>}
      </Main>

      <Footer>
       
      </Footer>
    </Frame>
  );
};

const MyPage = () => {
  return <Layout props={<MyPageContent />} />;
};

export default MyPage;
