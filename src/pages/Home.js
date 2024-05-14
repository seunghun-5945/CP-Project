import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";
import ItemFrame from "../components/ItemFrame";
import axios from "axios";
import DailyModal from "../components/DailyModal";
import { ImTelegram } from "react-icons/im";

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
  const [image, setImages] = useState([]);
  const [FILE_nAME, setFILE_NAME] = useState([]);
  FILE_nAME.length = 15;
  let count, i = 0;
  const API_KEY = 'AIzaSyAxAqJYZSKbF7pm5XHril-dndv4HdVrbz4';
  const DRIVE_FOLDER_ID = '1-1w_h8t3ICtJRC57iUuTG-Mwy5sUFXJQ';
  const FILE_NAME = '202404031640073ee624efd45c646d738d0ded223b2e5c.jpg'; 

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
    info.forEach((item) => {
      if(info.length > FILE_nAME.length)
      {
        FILE_nAME.push(item.picture);
        fetchImages(FILE_nAME[0])
      }
      console.log(FILE_nAME[4]);
      console.log(count);
      count++;
    });
  }, [info]);
  

  const fetchImages = async (FILE_NAME) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files?q=name='${FILE_NAME}'+and+'${DRIVE_FOLDER_ID}'+in+parents&fields=files(id,name,thumbnailLink)`, {
          params: {
            key: API_KEY,
            pageSize: 1
          }
        });
        image.push(response.data.files[0]);
        console.log(image);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
  };
   
  const PictureReturn = () => {
    return image.thumbnailLink;
  }
  return (
    <Container>
      {/* <DailyModal/> */}
      <Banner />
      <SubBanner />
      <h2 style={{marginTop:"3%"}}>마감 인박 경매</h2>
      <Frame>
        {info.slice(0, 7).map((item, oldest) => (
          
          <ItemFrame
            key={oldest}
            Product={item.title}
            Price={item.startprice}
            Image={PictureReturn()}
          />
        ))}
      </Frame>
      <h2 style={{marginTop:"3%"}}>최근에 올라온 경매</h2>
      <Frame>
        {info.slice(0, 7).map((item, eldest) => (
          <ItemFrame
            key={eldest}
            Image={image.thumbnailLink}
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
