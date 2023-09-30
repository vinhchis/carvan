import { Fragment, useState, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ListRange from "./components/ListRange/ListRange";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListCar from "./components/ListCar/ListCar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";
import CarDetail from "./components/CarDetail/CarDetail";

// data
import RangeDB from "./data/ranges.json";
import CarDB from "./data/cars.json";


function App() {
  const [ranges, setRanges] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setRanges(RangeDB);
    setCars(CarDB);
  },[]);



  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranges" element={<ListRange ranges={ranges}/>} />
        <Route path="/cars/ranges/:rangeN" element={<ListCar carList={cars}/>}/>
        <Route path="/cars" element={<ListCar carList={cars}/>}/>
        <Route path="/cars/:id" element={<CarDetail/>} />
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;