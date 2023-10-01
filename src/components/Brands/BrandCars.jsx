import Car from "../Car/Car";
import CarDB from "../../data/cars.json";
import React, { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Car/car.css";
import { Col, Container, Row } from "react-bootstrap";

const BrandCars = () => {
  const { brand } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const brandCars = CarDB.filter(
      (car) => car.brand.toLowerCase() == brand.toLowerCase()
    );
    setCars(brandCars);
  }, [brand]);
  return (
    <div className="container">
      {cars.length ? (
        cars.map((car) => (
          <Col xl={3} className="mb-5">
            <Car key={car.id} carInfo={car} />
          </Col>
        ))
      ) : (
        <p>No cars available for {brand}</p>
      )}
    </div>
  );
};

export default BrandCars;
