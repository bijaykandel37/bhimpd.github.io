import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del, edit, view } from "../action/index";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Form = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const productList = useSelector((state) => state.Productreducer.list);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInputData((prevInputData) => ({
      ...prevInputData,
      image: file,
    }));
  };

  const handleAdd = () => {
    if (selectedProduct) {
      const updatedProduct = {
        id: selectedProduct.id,
        data: { ...inputData },
      };
      dispatch(edit(updatedProduct));
      setSelectedProduct(null);
    } else {
      dispatch(add({ ...inputData }));
    }
    setInputData({
      name: "",
      price: "",
      description: "",
      image: null,
    });

    const updatedProductList = [
      ...productList,
      { id: Date.now(), data: { ...inputData } },
    ];
    localStorage.setItem("addedProducts", JSON.stringify(updatedProductList));
  };

  const handleButtonClick = () => {
    handleAdd();
  };

  const handleDelete = (id) => {
    dispatch(del(id));
  };

  const handleEdit = (id) => {
    const selected = productList.find((elem) => elem.id === id);
    if (selected) {
      setSelectedProduct(selected);
      setInputData(selected.data);
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      setInputData(selectedProduct.data);
    } else {
      setInputData({
        name: "",
        price: "",
        description: "",
        image: null,
      });
    }
  }, [selectedProduct]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("addedProducts");
    if (storedProducts) {
      dispatch({ type: "LOAD", data: JSON.parse(storedProducts) });
    } else {
      dispatch({ type: "LOAD", data: [] });
      localStorage.setItem("addedProducts", JSON.stringify([]));
    }
  }, [dispatch]);

  useEffect(() => {
    const urls = productList.map((elem) => {
      const { data } = elem;
      const { image } = data;
      return image ? URL.createObjectURL(new Blob([image])) : null;
    });
    setImageUrlArray(urls);

    // Clean up the created object URLs when the component unmounts
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [productList]);

  const navigate = useNavigate();

  const [imageUrlArray, setImageUrlArray] = useState([]);

 const handleView = (product, index) => {
  const imageUrl = imageUrlArray[index];
  if (imageUrl) {
    let imageUrlBlob = null;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", imageUrl, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (xhr.status === 200) {
        const reader = new FileReader();
        reader.onloadend = function () {
          imageUrlBlob = reader.result;
          navigate("/formdetails", { state: { product, imageUrl: imageUrlBlob } });
        };
        reader.readAsDataURL(xhr.response);
      } else {
        console.error("Failed to load image:", xhr.status);
      }
    };
    xhr.send();
  } else {
    navigate("/formdetails", { state: { product, imageUrl: null } });
  }
};

  
  

  return (
    <>
      <div className="container text-center my-5">
        <h1>Add products</h1>
      </div>

      <div className="container">
        <div className="row d-flex align-items-center justify-center">
          <div className="col-md-6 formbox mx-auto py-5">
            Product Name:
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              value={inputData.name}
            />
            <br /> <br />
            Product Price:
            <input
              type="text"
              name="price"
              id="price"
              onChange={handleInputChange}
              value={inputData.price}
            />
            <br /> <br />
            Product Description:
            <input
              type="text"
              name="description"
              id="description"
              onChange={handleInputChange}
              value={inputData.description}
            />
            <br /> <br />
            Image Upload:
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <br /> <br />
            <button onClick={handleButtonClick}>
              {selectedProduct ? "Update item" : "Add item"}
            </button>
          </div>
        </div>
      </div>
      <div className="container my-5 align-items-center">
        <h2 className="products my-3 text-center text-decoration-underline">
          *** Added Products ***
        </h2>
        <Table striped bordered hover>
          <thead>
            <tr className="tbl text-center">
              <th>SN</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((elem, index) => {
              const { id, data } = elem;
              const { name, price, description, image } = data;

              const imageUrl = image ? URL.createObjectURL(new Blob([image])) : null;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{description}</td>
                  <td>
                    {imageUrl ? (
                      <img src={imageUrl} alt="Product" width="60" height="60" />
                    ) : (
                      <span>No image available</span>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(id)}>
                      <EditIcon />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleView(data, index)}>
                      <VisibilityIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Form;
