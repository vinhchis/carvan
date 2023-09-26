import { CardGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SearchBar from "../SearchBar/SearchBar";

import RangesDB from "../../data/ranges.json"

import ConvertibleImg from "../../assets/image/ranges/Convertible.svg";
import CoupleImg from "../../assets/image/ranges/Couple.svg";
import HatchbackImg from "../../assets/image/ranges/Hatchback.svg";
import MPVImg from "../../assets/image/ranges/MPV.svg";
import SedanImg from "../../assets/image/ranges/Sedan.svg";
import SUVImg from "../../assets/image/ranges/SUV.svg";
import TrunkImg from "../../assets/image/ranges/Trunk.svg";
import VANImg from "../../assets/image/ranges/VAN.svg";
import WagonImg from "../../assets/image/ranges/Wagon.svg";



import { useState } from "react";

function Range({range}) {
  const imgLink = `../../assets/img/ranges/${range.name}.png`;
  // let range = {
  //   id: 1,
  //   name: "SUV",
  //   quantity : 12,
  //   desc: "Versatile, spacious, and rugged vehicles designed for diverse lifestyles, blending car comfort with off-road capability.",
  // };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      {/* <Card.Header>{`${range.count} cars`}</Card.Header> */}
      <Card.Img variant="top" src={imgLink} />
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
  const [ranges, setRanges] = useState(RangesDB);

  // console.log(ranges)

  return (
    <div className="list-range col-10 offset-1">
      <SearchBar />
      {/* <Range range={ranges[0]}/>
      {ranges.map((x,range) => (
        x % 4 ? null : null,
        <Range range={range}/>
       ))} */}
      <div>
        <Row className="my-4">
          <Col ms={3}>
            <Range range={ranges[0]} />
          </Col>
          <Col ms={3}>
            <Range range={ranges[1]} />
          </Col>
          <Col ms={3}>
            <Range range={ranges[2]} />
          </Col>
          <Col ms={3}>
            <Range range={ranges[3]} />
          </Col>
        </Row>
        <Row className="my-4">
          <Col ms={3}>
            <Range range={ranges[4]} />
          </Col>
          <Col ms={3}>
            <Range range={ranges[5]} />
          </Col>
          <Col ms={3}>
            <Range range={ranges[6]} />
          </Col>
          <Col ms={3}>
            <Range range={ranges[7]} />
          </Col>
        </Row>
        <Row className="my-4">
          <Col ms={3}>
            <Range range={ranges[8]} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListRange;
