import { Fragment } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ListRange from "./components/ListRange/ListRange";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListCar from "./components/ListCar/ListCar";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ranges" element={<ListRange />} />
        <Route path="/Cars" element={<ListCar/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;