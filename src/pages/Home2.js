import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemFrame from "../components/ItemFrame";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightsalmon;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 1000px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Home2 = () => {
  
  const [info, setInfo] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app/api/users/getcontents');
        console.log(response.data);
        setInfo(response.data);
      } catch (error) {
        console.log('error');
      }
    };
  
    fetchData();
  }, []);

  return (
    <Container>
      <Frame>
        {info.slice(0,5).map((item, index) => (
          <ItemFrame 
            key={index}
            Product={item.title}
            Price={item.startprice}
            Image={item.picture}
          />
        ))}
      </Frame>
    </Container>
  )
}

export default Home2;