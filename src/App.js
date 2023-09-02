import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from "./screen/home";
import ContactScreen from "./screen/contact";
import DestinationScreen from "./screen/destination";
import HotelScreen from "./screen/hotel";
import AboutScreen from "./screen/about";
import PageNotFoundScreen from "./screen/page-not-found";

import"./css/flaticon.css";
	import "./css/style.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
        <Route path="hotel" element={<HotelScreen></HotelScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>

        <Route path="*" element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;