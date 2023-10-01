import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./range.css"

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
        <Button
          className="button-list"
          variant="primary"
          onClick={() => {
            navigate(`/ranges/${range.name}`);
          }}
        >
          List Car
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">n items</Card.Footer>
    </Card>
  );
}
export default Range;