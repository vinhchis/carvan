import { CardGroup } from "react-bootstrap";
import Range from "./Cards/Range/Range";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchBar from "./SearchBar/SearchBar";

function ListRange() {
  return (
    <div>
      <SearchBar/>
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
