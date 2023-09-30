import { CardGroup, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./listRange.css";
import RangeDB from "../../data/ranges.json"


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Range({ range }) {
  const navigate = useNavigate();

  return (
    <Card className="range text-center">
      {/* <Card.Header>{`${range.count} cars`}</Card.Header> */}
      <Card.Img
        variant="top"
        src={require(`../../assets/image/ranges/${range.name}.svg`)}
      />
      <Card.Body>
        <Card.Title>{range.name}</Card.Title>
        <Card.Text class="text-start range-desc">{range.desc}</Card.Text>
        <Button className="button-list"
          variant="primary"
          onClick={() => navigate(`/cars/ranges/${range.id}`)}
        >
          List Car
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">n items</Card.Footer>
    </Card>
  );
}

function ListRange() {
  const [ranges, setRanges] = useState([]);

  useEffect(() => {
    setRanges(RangeDB);
  })
  return (
    <Container className="list-range">
      <Row>
        {ranges.map((range) => (
          <Col xl={4} className="my-4">
            <Range range={range} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListRange;
