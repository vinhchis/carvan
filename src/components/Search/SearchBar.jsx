import { Form, Button, Col, Row } from "react-bootstrap";

function SearchBar() {
  return (
      <Form className="my-3">
        <Row>
          <Col>
            <Form.Group>
              <Form.Control type="text" placeholder="Search by name" />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
  );
}

export default SearchBar;
