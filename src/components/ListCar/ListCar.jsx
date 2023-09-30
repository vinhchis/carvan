import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import Buttons from "./Buttons";
import Car from "../Car/Car";
import SearchBar from "../Search/SearchBar";

import "./listCar.css";
import { useParams } from "react-router-dom";

function ListCar({carList}) {
  const {rangeN} = useParams();
  const [cars, setCars] = useState([]);
    // make filter (year)
  const menuItems = [...new Set(cars.map((car) => car.year))];
  const filterItem = (yearSelected) => {
    const newItem = cars.filter((newVal) => {
      return newVal.year === yearSelected;
    });
    setCars(newItem);
  };
  const getCarsByRange = (range) => {
      setCars(cars.filter(car => car.class == range));
  }

  useEffect(() => {
    setCars(carList);
    console.log("1")
  }, [carList]);


  if(rangeN){
    useEffect(() => {
      getCarsByRange(rangeN);
      console.log("2");
    }, [rangeN]);
  }

  

  

  return (
    <Container className="list-car">
      <Row>
        <SearchBar setItem={setCars} />
      </Row>
      <Row>
        <Buttons
          filterItem={filterItem}
          setItem={setCars}
          menuItems={menuItems}
        />
      </Row>
      <Row>
        {cars.length > 0
          ? cars.map((car) => (
              <Col xl={3} className="mb-3">
                <Car carInfo={car} key={car.id} />
              </Col>
            ))
          : "No Car"}
      </Row>
    </Container>
  );
}

export default ListCar;
