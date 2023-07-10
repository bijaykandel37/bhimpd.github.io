import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Imagesdata from "./Imagesdata";
import Datacard from "./Datacard";

const Filter = () => {
  const [items, setItems] = useState(Imagesdata);
  
  const filterItem = (categoryvalue) => {
    if (categoryvalue === "all") {
      setItems(Imagesdata);
    } else {
      const updatedItems = Imagesdata.filter((currentelement) => {
        return currentelement.category === categoryvalue;
      });
      setItems(updatedItems);
    }
  };

  return (
    <>
      <div className="container text-center my-4">
        <h2>Our Products</h2>
      </div>
      <div className="container">
        <div className="filters d-flex justify-content-center">
          <button className="btn btn-warning m-2" onClick={() => filterItem("all")}>
            All
          </button>
          <button className="btn btn-warning m-2" onClick={() => filterItem("laptop")}>
            Laptop
          </button>
          <button className="btn btn-warning m-2" onClick={() => filterItem("camera")}>
            Camera
          </button>
          <button className="btn btn-warning m-2" onClick={() => filterItem("mobile")}>
            Mobile
          </button>
        </div>
      </div>

      <div className="container text-center my-4">
        <div className="row">
          {items.map((value, index) => {
            return (
              <Datacard
                key={index}
                img={value.img}
                category={value.category}
                name={value.name}
                price={value.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
