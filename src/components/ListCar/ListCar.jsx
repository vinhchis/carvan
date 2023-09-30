import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import SearchBar from "../Search/SearchBar";

import "./listCar.css"

import CarDB from "../../data/cars.json";
import Buttons from "./Buttons";
import Car from "../Car/Car";


function ListCar() {
  const [cars, setCars] = useState([]);
  // make filter (year)
  const menuItems = [...new Set(cars.map((car) => car.year))];

  const filterItem = (curcat) => {
    const newItem = cars.filter((newVal) => {
      return newVal.year === curcat;
    });
    setCars(newItem);
  };

  useEffect(() => {
    setCars(CarDB);
  },[])
  return (
    <Container className="list-car">
      <Row>
        <SearchBar />
      </Row>
      <Row>
      <Buttons
            filterItem={filterItem}
            setItem={setCars}
            menuItems={menuItems}
          />
      </Row>
      <Row>
        {cars.map((car) => (
          <Col xl={3} className="mb-3">
            <Car carInfo={car} key={car.id} />
          </Col>
        ))}
      </Row>
    </Container>  
  );
}

export default ListCar;
