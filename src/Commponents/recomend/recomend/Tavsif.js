import React, { useEffect, useState } from "react";
import "./Tavsif.css";
import { Carousel } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { CgShoppingCart } from "react-icons/cg";
import { useTranslation } from "react-i18next";
function Tavsif() {
  const saved = JSON.parse(localStorage.getItem("prod"));
  const [photo, setPhoto] = useState(saved.files)

  const [elem, setElem] = useState([
    {
      name: saved.name,
      title: saved.title,
      price: saved.price,
      count: saved.count,
      files: saved.files
    },
  ]);
  console.log(saved.name + "sa");

  const dispatch = useDispatch()
  const addContact = (id) => {
    dispatch({ type: 'Add_Order', payload: id })
  }
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
      {elem.map((foo) => {
        return (

          <div className="caruselTavsif" key={foo._id}>
            <Carousel variant="dark" className="caruselpht">
              {
                photo.map((bar, index) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block imgWid"
                        src={"http://localhost:5000/" + bar.filePath}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>

            <div className="info">
              <h3 className="titleTavsif">{foo.name}</h3>
              <h3 className="priceTavsifi">
                <span>Uzs {foo.price}</span>{" "}
              </h3>
              <p className="textTavsif">{foo.title}</p>
            </div>
            <div className="shopJavob">
              <h4>
                {t("tf")}
              </h4>
            </div>
            <button
              className="btnTavsifKor"
              onClick={() => addContact(foo)}
            >
              <CgShoppingCart className="shopIconTav" />
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Tavsif;
