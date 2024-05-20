import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Auction from './pages/Auction';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import Home2 from './pages/Home2';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeInfo from './pages/EmployeeInfo';
import Hotdeal from './pages/Hotdeal';
import SearchResult from './pages/SearchResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Auction" element={<Auction />} />       
        <Route path="/EmployeeInfo" element={<EmployeeInfo />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Hotdeal" element={<Hotdeal/>} />
        <Route path="/SearchResult" element={<SearchResult/>} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
