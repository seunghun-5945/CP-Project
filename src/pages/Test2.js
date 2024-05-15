import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid black;
`;

const Test2 = () => {

  const array = [1,2,3,4,5,6];
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(0);
  const [test3, setTest3] = useState(0);

  const sibal = () => {
    return (
      setTest(test + 1)
    )
  }
  
  useEffect(() => {
    console.log(1)
  },[test])


  useEffect(() => {
    console.log(2);
  }, [] )


  useEffect(()=> {
    console.log(3);
  }, [])

  useEffect(()=> {
    array.map(()=>{
      console.log(4)
    })
  }, [test])

  return (
  <Container>
    <Frame>
      <button onClick={sibal}>시발</button>
    </Frame>
  </Container>
  )
}

export default Test2;