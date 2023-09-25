import { Button, Card } from "react-bootstrap";

function Car() {
  return ( 
    <>
      <Card className="text-center" style={{ width: "18rem" }}>
      {/* <Card.Header>{`${range.count} cars`}</Card.Header> */}
      <Card.Img variant="top" src={SUVImg} />
      <Card.Body>

        <Card.Title>{range.name}</Card.Title>
        <Card.Text class="text-start">
         {range.desc}
        </Card.Text>
        <Button variant="primary">List Car</Button>
      </Card.Body>
      <Card.Footer className="text-muted">12 items</Card.Footer>
    </Card>
    </>
   );
}

export default Car;