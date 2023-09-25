import { CardGroup } from "react-bootstrap";
// import Range from "./Cards/Range/Range";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SearchBar from "../SearchBar/SearchBar";


import SUVImg from "../../assets/image/ranges/SUV.svg";

function Range() {
  const imgLink = "../../../assets/img/ranges";
  let Range = {
    id: 1,
    name: "SUV",
    quantity : 12,
    desc: "Versatile, spacious, and rugged vehicles designed for diverse lifestyles, blending car comfort with off-road capability.",
  };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      {/* <Card.Header>{`${range.count} cars`}</Card.Header> */}
      <Card.Img variant="top" src={SUVImg} />
      <Card.Body>
        <Card.Title>{Range.name}</Card.Title>
        <Card.Text class="text-start">{Range.desc}</Card.Text>
        <Button variant="primary">List Car</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{Range.quantity} items</Card.Footer>
    </Card>
  );
}

function ListRange() {
  return (
    <div className="list-range col-10 offset-1">
      <SearchBar />
      <div>
        <Row className="my-4">
          <Col ms={3}>
            <Range />
          </Col>
          <Col ms={3}>
            <Range />
          </Col>
          <Col ms={3}>
            <Range />
          </Col>
          <Col ms={3}>
            <Range />
          </Col>
        </Row>
        <Row className="my-4">
          <Col ms={3}>
            <Range />
          </Col>
          <Col ms={3}>
            <Range />
          </Col>
          <Col ms={3}>
            <Range />
          </Col>
          <Col ms={3}>
            <Range />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListRange;
