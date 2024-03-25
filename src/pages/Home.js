import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";
import ItemFrame from "../components/ItemFrame";
import Item from "../json/Item.json";
import axios from "axios";

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 1400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HomeContent = () => {

  const [data, setData] = useState(null);

  const axiosTest = () => {
    axios.get('http://localhost:2024/User').then((result)=>{
      setData(result.data[0].id);
    })
  }

  const idCheck = () => {
    return (
      console.log("hello")
    )
  }

  return (
    <Container>
      <Banner />
      <SubBanner />
      <h2 style={{marginTop:"3%"}}>마감 인박 경매</h2>
      <Frame>
        {Item.map((item, oldest) => (
          <ItemFrame
            key={oldest}
            Product={item.Product}
            Price={item.Price}
            Image={item.Image}
          />
        ))}
      </Frame>
      <h2 style={{marginTop:"3%"}}>최근에 올라온 경매</h2>
        <Frame>
        {Item.map((item, resent) => (
            <ItemFrame
              key={resent}
              Product={item.Product}
              Price={item.Price}
              Image={item.Image}
            />
          ))}
        </Frame>
        
        <Frame>
          <h1>여기에 엑시오스로 받아온 데이터 들어갈거임: {data}</h1>
          <button onClick={idCheck}>클릭!</button>
        </Frame>
    </Container>
  )
}

const Home = () => {
  return <Layout props={<HomeContent />} />
};
export default Home;