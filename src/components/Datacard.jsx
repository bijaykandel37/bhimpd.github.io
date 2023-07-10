import React from "react";
import Card from "react-bootstrap/Card";

const Datacard = (props) => {
  return (
    <>
      <div class="col-md-3 my-3">
        <Card style={{ width: "auto" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
          <Card.Title>{props.category}</Card.Title>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Datacard;
