import React from "react";
import {
  faCartShopping,
  faStar,
  faHeart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "react-bootstrap/Card";

const desc = [
  {
    icon: faCartShopping,
    text: "World Wide Shopping",
  },
  {
    icon: faStar,
    text: "Best Quality",
  },
  {
    icon: faHeart,
    text: "Best Offer",
  },
  {
    icon: faWallet,
    text: "Secure Payment",
  },
];

const Offer = () => {
  return (
    <>
      <div className="container text-center my-4">
        <h2>We Offer</h2>
      </div>
      <div className="container text-center my-4">
        <div className="row d-flex justify-content-center align-items-center">
          {desc.map((item, index) => (
            <div className="col-md-3 my-3 d-flex justify-content-center align-items-center" key={index}>
              <Card style={{ width: "18rem" }} className="mb-2">
                <Card.Header>
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{item.text}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
