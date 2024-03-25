import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { FiSearch } from "react-icons/fi";

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin-top: 7%;
`;

const Left = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    padding-bottom: 30px;
    font-size: 24px;
    font-weight: bold;
  }
  border: solid 2px;
`;

const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  h2 {
    margin-bottom: 20px;
    font-size: 22px;
  }
  li {
    list-style-type: none;
    margin-bottom: 20px;
    color: #343434;
    cursor: pointer;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 30px;
    border-color: #e7e7e7;
  }
`;

const Right = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 67%;
  margin-left: 20px;
`;

const RightInfo = styled.div`
  width: 100%;
  height: 60%;
  border: solid 1px;
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

const RightL = styled.div`
  width: 55%;
  height: 100%;
  border: solid 1px;
  display: flex;
  flex-direction: column;
`;

const RightR = styled.div`
  width: 45%;
  height: 100%;
  border: solid 1px;
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  border: solid 1px;
`

const Box = styled.div`
  width: 90%;
  height: 50%;
  border: solid 1px;
  border-radius: 15px;
  border-color: lightgray;
  margin-top: 30px;
  display: flex;  
  flex-direction: row;
`

const BoxIn = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  border-radius: 15px;
`

const RightProduct = styled.div`
  width: 100%;
  height: 40%;
  border: solid 1px;
  margin-top: 30px;
  h2 {
    padding: 10px;
  }
`;

const ProductMenu = styled.div`
  width: 100%;
  height: 20%;
  border: solid 1px;
  display: flex;
  align-items: center;
`;

const ProductMenuItem = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  border: solid 1px;
  cursor: pointer;
`;

const ProductBox = styled.div`
  width: 100%;
  height: 60%;
`;

// 여기부터 모달 디자인
const ModalMain = styled.div`
  width: 100%;
  height: 93%;
  padding: 15px;
  border: solid 1px;
`

const Modal1Header = styled.div`
  width: 100%;
  height: 20%;
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Modal1Ig = styled.div`
  display: flex;
  width: 25%;
  height: 70%;
  background-image: url("images/basic.jpg");
  background-size: 100% 100%;
  margin-top: 20px;
`

const Modal1Name = styled.h3`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Modal1Main = styled.div`
  width: 100%;
  height: 60%;
  border: solid 1px;
  display: flex;
  background-color: salmon;
  flex-direction: column;
  padding: 10px;
`

const Modal1Text = styled.h2`
  width: 100%;
  height: 10%;
  border: solid 1px;
`

const Modal1Space = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height:20%;
`

const Modal1Name2 = styled.h2`
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
  color: lightgray;
  border: solid 1px;
  font-size: 18px;
`

const Modal1Name2Text = styled.h2`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  border: solid 1px;
  font-size: 18px;
  flex-direction: row;  
`

const Modal1Id = styled.h2`
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
  color: lightgray;
  border: solid 1px;
  font-size: 18px;
`

const Modal1IdText = styled.h2`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  border: solid 1px;
  font-size: 18px;
  flex-direction: row;  
`

const Modal1Pw = styled.h2`
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
  color: lightgray;
  border: solid 1px;
  font-size: 18px;
`

const Modal1PwText = styled.h2`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  border: solid 1px;
  font-size: 18px;
  flex-direction: row;  
`

// 여기부터 모달2 디자인
const Modal2Title = styled.h2`
  border: solid 1px;
  font-size: 23px;
`

const ModalSearch = styled.div`
  width: 100%;
  height: 5%;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  position: relative; /* 부모 요소에 상대적 위치 설정 */
`;

const SearchInput = styled.input`
  background-color: transparent; /* 투명 배경 설정 */
  border: none;
  width: 95%;
  height: 100%;
  outline: none; /* 포커스 시 테두리 제거 */
  display: flex;
`;

const SearchIconWrapper = styled.div`
  position: absolute; /* 부모 요소에 대해 절대 위치 설정 */
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

const SearchIcon = styled(FiSearch)`
  font-size: 20px;
  cursor: pointer;
`;

const ModalContent = ({ content }) => {
  // 모달 내용을 props로 받도록 수정
  return (
    <>
      {content}
    </>
  )
};

const Modal1 = () => {
  return (
    <>
      <ModalMain>
        <Modal1Header>
        <Modal1Ig/>
        <Modal1Name>
          현지훈
        </Modal1Name>
        </Modal1Header>

        <Modal1Main>
          <Modal1Text>회원정보</Modal1Text>

          <Modal1Space>
          <Modal1Name2>사용자이름</Modal1Name2>
          <Modal1Name2Text>현지훈</Modal1Name2Text>
          </Modal1Space>

          <Modal1Space>
          <Modal1Id>아이디</Modal1Id>
          <Modal1IdText>inje2024</Modal1IdText>
          </Modal1Space>

          <Modal1Space>
          <Modal1Pw>비밀번호</Modal1Pw>
          <Modal1PwText>1234</Modal1PwText>
          </Modal1Space>

        </Modal1Main>
      </ModalMain>
    </>
  )
};

const Modal2 = () => {
  return (
    <>
      <ModalMain>
        <Modal2Title>탈퇴 사유를 알려주시면<br />개선을 위해 노력하겠습니다</Modal2Title>
      </ModalMain>
    </>
  )
};

const Modal3 = () => {
  return (
    <>
      <ModalMain>
        <ModalSearch>
          <SearchInput type="text" placeholder="상품명을 입력해주세요." />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </ModalSearch>
      </ModalMain>
    </>
  )
};

const Modal4 = () => {
  return (
    <>
      <ModalMain>
        <ModalSearch>
          <SearchInput type="text" placeholder="상품명을 입력해주세요." />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </ModalSearch>
      </ModalMain>
    </>
  )
};

const Entire = () => {
  return <>전체</>;
};

const Sell = () => {
  return <>판매중</>;
};

const Clear = () => {
  return <>판매완료</>;
};

const MyPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); // 모달 내용을 상태로 관리
  const [selectedProductMenu, setSelectedProductMenu] = useState("전체");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleItemClick = (content, title) => {
    // 리스트 아이템 클릭 핸들러
    setModalContent(content); // 클릭된 리스트 아이템에 해당하는 모달 내용으로 설정
    setIsModalOpen(true); // 모달 열기
    setModalTitle(title); // 모달 제목 설정
  };

  const handleProductMenuClick = (menu) => {
    setSelectedProductMenu(menu);
  };

  const [modalTitle, setModalTitle] = useState(""); // 모달 제목을 상태로 관리

  return (
    <Frame>
      <Left>
        <p>마이페이지</p>
        <LeftMenu>
          <h2>내 정보</h2>
          <li onClick={() => handleItemClick(Modal1, "회원정보수정")}>회원정보수정</li>
          <li onClick={() => handleItemClick(Modal2, "탈퇴하기")}>탈퇴하기</li>

          <hr />

          <ul>
            <h2>거래 정보</h2>
            <li onClick={() => handleItemClick(Modal3, "구매내역")}>구매내역</li>
            <li onClick={() => handleItemClick(Modal4, "판매내역")}>판매내역</li>
          </ul>
        </LeftMenu>
        {isModalOpen && (
          <Modal title={modalTitle} props={<ModalContent content={modalContent} />} onClose={closeModal} />
        )}
      </Left>

      <Right>
        <RightMain>
          <RightInfo>
            <RightL>
            <Title>사용자 이름</Title>
            <Box>
              <BoxIn>
                총 거래 횟수
              </BoxIn>
              <BoxIn>
                구매 횟수
              </BoxIn>
              <BoxIn>
                판매 횟수
              </BoxIn>
              <BoxIn>
                ???
              </BoxIn>
            </Box>
            </RightL>

            <RightR>

            </RightR>

          </RightInfo>

          <RightProduct>
            <h2>내 상품</h2>
            <ProductMenu>
              <ProductMenuItem onClick={() => handleProductMenuClick(Entire)}>
                전체
              </ProductMenuItem>
              <ProductMenuItem onClick={() => handleProductMenuClick(Sell)}>
                판매중
              </ProductMenuItem>
              <ProductMenuItem onClick={() => handleProductMenuClick(Clear)}>
                판매완료
              </ProductMenuItem>
            </ProductMenu>

            <ProductBox>{selectedProductMenu}</ProductBox>
          </RightProduct>
        </RightMain>
      </Right>
    </Frame>
  );
};

const MyPage = () => {
  return <Layout props={<MyPageContent />} />;
};

export default MyPage;
