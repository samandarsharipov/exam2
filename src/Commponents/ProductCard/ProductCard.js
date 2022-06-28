import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./ProductCard.css";
import AddProduct from '../AddProduct/AddProduct';
import Katalog from "./Katalog";
import { Link } from "react-router-dom";

function ProductCard() {

  const [product, setProduct] = useState([])

  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/product')
    setProduct(res.data)
  }, [])

  const deleteProduct = (_id) => {
    const url = `http://localhost:5000/product/${_id}`
    if (window.confirm("O'chirishni xoxlaysizmi?")) {
      axios.delete(url)
    }
    window.location.reload(false)
  }

  return (
    <div className="obshi">
      <AddProduct />
      <Katalog />
      <div className="container contacol">
        <div className="row my-3" >
          {
            product.map((prod) => {
              return (

                <div className="col-md-4" key={prod._id}>
                  <div className="card cardchProduct my-5">
                    <img className="imgPrductCard" src={"http://localhost:5000/" + prod.files[0].filePath}  />
                    <div className="titleProduct">
                      <h4>{prod.name}</h4>
                      <p className="productPrice">${prod.price}</p>
                    </div>
                    <div className="gap-2 d-md-block">
                      <button className="btn btn-warning  butonchaPRoduct " >
                        <Link to={"/EditProduct/" + prod._id}>Edit</Link>
                      </button>

                      <button
                        onClick={() => { deleteProduct(prod._id) }}
                        className="btn btn-danger  butonchaPRoduct "
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>


      </div>
    </div>
  );
}

export default ProductCard;
