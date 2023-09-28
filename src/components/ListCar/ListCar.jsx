import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import CarImg from "../../assets/image/cars/Vinfast.webp";
import { useNavigate, useParams } from "react-router-dom";

import "./listCar.css"

function Car({ carInfo }) {
  const [car, setCar] = useState({});
  const navigate = useNavigate();

  // run only once
  useEffect(() => {
    setCar(carInfo);
  }, []);

  const [show, setShow] = useState(false);
  return (
    <Card className="text-center car-card">
      <Card.Header className="text-end car-price">{car.price}$</Card.Header>
      <Card.Img variant="top" src={CarImg} />
      <Card.Body>
        <Card.Title>{`${car.year} ${car.brand} ${car.name}`}</Card.Title>
        <ListGroup>
          <ListGroup.Item>{car.odo} km</ListGroup.Item>
          <ListGroup.Item>{car.transmission}</ListGroup.Item>
          <ListGroup.Item>{car.fuel}</ListGroup.Item>
        </ListGroup>
        <ButtonGroup size="lg" className="my-2">
          <Button variant="info" onClick={() => navigate(`/cars/${car.id}`)}>
            Detail
          </Button>
          <Button variant="secondary">Add to Cart</Button>
        </ButtonGroup>
      </Card.Body>
      <Card.Footer className="text-muted">Sale</Card.Footer>
    </Card>
  );
}

function ListCar({ cars }) {
  return (
    <Container className="list-car">
      <Row>
        <SearchBar />
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
