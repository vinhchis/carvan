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
import SearchBar from "../SearchBar/SearchBar";
import CarImg from "../../assets/image/cars/Vinfast.webp";
import { useState } from "react";

function Car() {
  let Car = {
    id: 1,
    brand: "Toyota",
    name: "Corolla",
    year: 2019,
    price: "$15,000",
    class: "Sedan",
    fuel: "Gas",
    seat: 5,
    registrationDate: "2019-04-15",
    odo: "30,000",
    warrantyDate: "2023-04-15",
    transmission: "Automatic",
    image: "car1.jpg",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="text-center" style={{ width: "20rem" }}>
        <Card.Header className="text-end">{Car.price}</Card.Header>
        <Card.Img variant="top" src={CarImg} />
        <Card.Body>
          <Card.Title>{`${Car.year} ${Car.brand} ${Car.name}`}</Card.Title>
          <ListGroup>
            <ListGroup.Item>{Car.odo} km</ListGroup.Item>
            <ListGroup.Item>{Car.transmission}</ListGroup.Item>
            <ListGroup.Item>{Car.fuel}</ListGroup.Item>
          </ListGroup>
          <ButtonGroup size="lg" className="mb-2 my-2">
            <Button
              variant="info"
              onClick={handleShow}
            >
              Detail
            </Button>
            <Button variant="secondary">Add to Cart</Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">Sale</Card.Footer>
      </Card>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`${Car.year} ${Car.brand} ${Car.name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image variant="top" src={CarImg} />
          <Container>
            <Row>
              <Col className="car-story" md={6}>
                <h2>About</h2>
                <p>
                  In 2019, I purchased a brand new Toyota Corolla, and it
                  quickly became an integral part of my daily life. Its sleek
                  design and reliable reputation were major selling points for
                  me. Little did I know that four years later, it would continue
                  to exceed my expectations. The Corolla's performance has
                  remained stellar, with its fuel efficiency impressively
                  consistent. It navigates city streets with ease, and the
                  responsive handling ensures a smooth ride. Whether it's daily
                  commutes, road trips, or quick errands, the Corolla has proven
                  to be a versatile companion. Inside the cabin, the interior
                  has aged gracefully. The comfortable seats, user-friendly
                  infotainment system, and ample cargo space have all held up
                  well. The technology features have remained up-to-date, thanks
                  to occasional software updates provided by Toyota. What truly
                  stands out is the Corolla's reliability. It starts without
                  fail, even in harsh weather conditions, and maintenance costs
                  have been minimal. It feels as dependable as the day I drove
                  it off the lot. In summary, my 2019 Toyota Corolla has been a
                  remarkable investment. It continues to deliver exceptional
                  performance, comfort, and reliability, making it a loyal and
                  trusted partner on the road.
                </p>
              </Col>
              <Col className="car-specification" md={6}>
                <Table responsive="sm" hover>
                  <thead>
                    <th>specific</th>
                    <th>value</th>
                  </thead>
                  <tbody>
                    {Object.keys(Car).map((key) =>
                      key != "id" && key != "image" ? (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{Car[key]}</td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Compare
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function ListCar() {
  return (
    <div className="list-car col-10 offset-1">
      <SearchBar />
      <div>
        <Row className="my-4">
          <Col ms={4}>
            <Car />
          </Col>
          <Col ms={4}>
            <Car />
          </Col>
          <Col ms={4}>
            <Car />
          </Col>
        </Row>
        <Row className="my-4">
          <Col ms={4}>
            <Car />
          </Col>
          <Col ms={4}>
            <Car />
          </Col>
          <Col ms={4}>
            <Car />
          </Col>
        </Row>
        <Row className="my-4">
          <Col ms={4}>
            <Car />
          </Col>
          <Col ms={4}>
            <Car />
          </Col>
          <Col ms={4}>
            <Car />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListCar;
