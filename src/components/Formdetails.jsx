import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css"
const FormDetails = () => {
  const location = useLocation();
  const { product, imageUrl } = location.state || {};

  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div>
      <div className="container align-items-center py-5 my-5">

      
      <h1 className="pd">Product Details</h1>
      <div className="pddetail">
        <h3>Name: {product.name}</h3>
        <h3>Price: {product.price}</h3>
        <h3>Description: {product.description}</h3>
        {imageUrl && <img src={imageUrl} alt="Product" width="100%"  height="auto" maxWidth="100%" maxHeight="100%"/>}
      </div>
    </div>
    </div>
  );
};

export default FormDetails;
