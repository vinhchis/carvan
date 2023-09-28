import { CardGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SearchBar from "../SearchBar/SearchBar";

import RangeDB from "../../data/ranges.json"
import { useEffect, useState } from "react";

function Range({range}) {
  /*
  let range = {
    id: 1,
    name: "SUV",
    quantity : 12,
    desc: "Versatile, spacious, and rugged vehicles designed for diverse lifestyles, blending car comfort with off-road capability.",
  };
  */

  return (
    <Card className="text-center col-sm-4 mx-1" >
      {/* <Card.Header>{`${range.count} cars`}</Card.Header> */}
      <Card.Img variant="top" src={require(`../../assets/image/ranges/${range.name}.svg`)} />

      <Card.Body>
        <Card.Title>{range.name}</Card.Title>
        <Card.Text class="text-start">{range.desc}</Card.Text>
        <Button variant="primary">List Car</Button>
      </Card.Body>
      <Card.Footer className="text-muted">n items</Card.Footer>
    </Card>
  );
}

function ListRange() {
  const [ranges, setRanges] = useState(RangeDB);

  useEffect(() => {
    setRanges(RangeDB) 
  },[])

  console.log(ranges);

  return (
    <div className="list-range col-sm-10 offset-1">
      <SearchBar />
      <div className="row">
      {ranges.map((range) => (
        <Range range={range}/>
       ))}
      </div>
      
      
    </div>
  );
}

export default ListRange;
