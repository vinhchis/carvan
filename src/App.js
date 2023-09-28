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

// Data
import CarDB from "./data/cars.json";
import RangeDB from "./data/ranges.json"
import CarDetail from "./components/CarDetail/CarDetail";


function App() {
  const [cars, setCars] = useState([]);
  const [ranges, setRanges] = useState([]);

  useEffect(() => {
    setCars(CarDB);
    setRanges(RangeDB); 
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranges" element={<ListRange ranges={ranges} />} />

        <Route path="/cars" element={<ListCar cars={cars}/>}/>
        <Route path="/cars/ranges/:id" element={<ListCar cars={cars}/>} />
        <Route path="/cars/:id" element={<CarDetail cars={cars}/>} />

  
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>



      </Routes>
      <Footer/>
    </>
  );
}

export default App;