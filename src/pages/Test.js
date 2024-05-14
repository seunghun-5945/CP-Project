import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyAxAqJYZSKbF7pm5XHril-dndv4HdVrbz4';
const DRIVE_FOLDER_ID = '1-1w_h8t3ICtJRC57iUuTG-Mwy5sUFXJQ';
const FILE_NAME = '202404031640073ee624efd45c646d738d0ded223b2e5c.jpg'; // 가져오고자 하는 파일 이름

const App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files?q=name='${FILE_NAME}'+and+'${DRIVE_FOLDER_ID}'+in+parents&fields=files(id,name,thumbnailLink)`, {
          params: {
            key: API_KEY,
            pageSize: 1
          }
        });

        const imageData = response.data.files[0]; // 첫 번째 이미지만 가져오기

        setImage(imageData);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>Image from Google Drive</h1>
      {image && (
        <img src={image.thumbnailLink} alt={image.name} style={{wiedth:"1920px", height:"800px"}}/>
      )}
    </div>
  );
};

export default App;