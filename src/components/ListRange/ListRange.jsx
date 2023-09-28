import { CardGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SearchBar from "../SearchBar/SearchBar";

import "./listRange.css"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Range({range}) {
  const navigate = useNavigate();

  return (
    <Card className="range text-center col-4 my-2" >
      {/* <Card.Header>{`${range.count} cars`}</Card.Header> */}
      <Card.Img variant="top" src={require(`../../assets/image/ranges/${range.name}.svg`)} />

      <Card.Body>
        <Card.Title>{range.name}</Card.Title>
        <Card.Text class="text-start">{range.desc}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/cars/ranges/${range.id}`)}>List Car</Button>
      </Card.Body>
      <Card.Footer className="text-muted">n items</Card.Footer>
    </Card>
  );
}

function ListRange({ranges}) {
  return (
    <div className="list-range col-sm-10 offset-1 ">
      <SearchBar />
      <div className="d-flex justify-content-between flex-wrap">
      {ranges.map((range) => (
        <Range range={range}/>
       ))}
      </div>
    
    </div>
  );
}

export default ListRange;
