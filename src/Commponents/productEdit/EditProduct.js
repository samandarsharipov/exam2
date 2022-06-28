import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EditProduct.css";
import { useTranslation } from "react-i18next";

function EditProduct() {

  const { id } = useParams();
  const [baza, setBaza] = useState([]);
  const [prod, setProd] = useState({
    name: "",
    category: "",
    type: "",
    price: "",
    title: "",
    model: "",
    files: "",
  });

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/product");
    let foo = res.data.filter((prod) => {
      if (prod._id == id) {
        return true
      }
    })
    prod.name = foo[0].name
    prod.price = foo[0].price
    prod.title = foo[0].title

    setBaza(foo)
  }, []);

  const onSubmit = (e) => {
    axios
      .patch(`http://localhost:5000/product/${id}`, prod)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert("malumot nito kirtldi");
      });
    e.preventDefault();
    window.location.reload(false)
  };

  const changeHandler = (e) => {
    setProd({ ...prod, [e.target.name]: e.target.value });
  };
  console.log(prod)
  const { t } = useTranslation();
    const language = [
      {
        code: "uz",
        name: "Uzbek",
        country_code: "uz",
      },
      {
        code: "en",
        name: "English",
        country_code: "gb",
      },
      {
        code: "pу",
        name: "Pусский",
        country_code: "py",
      },
    ];
  return (
    <>
      <div className="container contacol my-5 p-5">
        <div className="editForm">
          <form
            className="form  "
            onSubmit={onSubmit}
          >
            <p className='editName'>{t("ed1")}</p>
            <input
              className="form-control my-4 inputsadd"
              placeholder="name"
              type="text"
              name="name"
              value={prod.name}
              onChange={changeHandler}
            />
             <p className='editName'>{t("ed2")}</p>
            <input
              className="form-control  my-4 inputsadd"
              placeholder="price"
              type="text"
              name="price"
              value={prod.price}
              onChange={changeHandler}
            />
             <p className='editName'>{t("ed3")}</p>
            <textarea
              className="form-control  my-4 inputsadd"
              placeholder="title"
              type="text"
              name="title"
              value={prod.title}
              onChange={changeHandler}></textarea>
            <button className="btn btnAddAdd"  type="submit" value="UpdateProduct">
            {t("ed4")}</button>
          </form>
        </div>
      </div>

    </>
  );
}

export default EditProduct;