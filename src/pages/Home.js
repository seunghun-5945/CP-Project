import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";
import ItemFrame from "../components/ItemFrame";
import axios from "axios";
import DailyModal from "../components/DailyModal";

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 1400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
`;

const HomeContent = () => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-cpbeck-hdoly2altu7slne.sel5.cloudtype.app/api/users/getcontents');
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
  }, []); 
  
  useEffect(() => {
    console.log(info); 
  }, [info]); 

  return (
    <Container>
      <DailyModal/>
      <Banner />
      <SubBanner />
      <h2 style={{marginTop:"3%"}}>마감 인박 경매</h2>
      <Frame>
        {info.slice(0, 7).map((item, oldest) => (
          <ItemFrame
            key={oldest}
            Product={item.title}
            Price={item.startprice}
            Image={item.picture}
          />
        ))}
      </Frame>
      <h2 style={{marginTop:"3%"}}>최근에 올라온 경매</h2>
      <Frame>
        {info.map((item, resent) => (
          <ItemFrame
            key={resent}
            Product={item.title}
            Price={item.price}
            Image={item.image}
          />
        ))}
      </Frame>
    </Container>
  )
}

const Home = () => {
  return <Layout props={<HomeContent />} />
};
export default Home;
