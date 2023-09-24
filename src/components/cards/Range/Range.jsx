import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SUVImg from "../../../assets/image/ranges/SUV.svg";
function Range() {
  const imgLink = "../../../assets/img/ranges";
  let range = {
    id: 1,
    name: "SUV",
    desc: "Versatile, spacious, and rugged vehicles designed for diverse lifestyles, blending car comfort with off-road capability.",
  };

  return (
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
  );
}

export default Range;
