import React from "react";
import { Button, Card } from "react-bootstrap";

const Cards = ({ item }) => {
  return (
    <div className="m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price} $</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
