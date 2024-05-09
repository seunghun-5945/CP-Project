import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: salmon;
`;

const Frame = styled.div`
  width: 30%;
  height: 40%;
  border: 1px solid black;
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
`;

function Test() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRepassword] = useState('');
  const token = localStorage.getItem('token');

  const handlePwChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  
  const handleNewPwChange = (e) => {
    setNewPassword(e.target.value);
  }
  
  const handleRePwChange = (e) => {
    setRepassword(e.target.value);
  }

  const pwChange = async () => {

    try {
      const response = await axios.post('https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app' + '/api/users/changing_password', {
        data: {
          user_password: password,
          password: newPassword,
          confirm_password: rePassword,
          authorization: token
        }
      })
      console.log('작동함');
    }
    catch (error) {
      console.log('에러남');
    }
  }
 
  
  const onWithDrawal = async () => {
    try {
      const response = await axios.post('https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app/api/users/delete_user', {
        data: {
          authorization: token
        }
      });
      console.log('서버로부터 응답:', response.data);
      return response.data;
    } catch (error) {
      console.error('요청 중 오류 발생:', error);
      throw error;
    }
  }
  

  return (
    <Container>
      <Frame>
        <Box>
          <span>비밀번호입력</span><input type="text" onChange={handlePwChange}/>
        </Box>
        <Box>
          <span>변경할 비밀번호입력</span><input type="text" onChange={handleNewPwChange}/>
        </Box>
        <Box>
          <span>변경할 비밀번호 재입력</span><input type="text" onChange={handleRePwChange}/>
        </Box>
        <button onClick={pwChange}>변경하기</button>
      </Frame>

      <Frame>
        <Box>
          <span>회원탈퇴 테스트임</span><button onClick={onWithDrawal}>탈퇴하기</button>
        </Box>
      </Frame>
    </Container>
  );
}

export default Test;