import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const MyPageContent = () => {
  return (
    <>
      mypage 추가 예정
    </>
  )
}

const MyPage = () => {
  return <Layout props={<MyPageContent />} />
};

export default MyPage;