import { Form, Button, Col, Row } from "react-bootstrap";

function SearchBar() {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control type="text" placeholder="Search range of car " />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchBar;
