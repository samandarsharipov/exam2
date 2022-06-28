import { useState } from "react";
import React from "react";
import "./Contact.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Modal from "react-modal";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next"; 
import axios from 'axios'
Modal.setAppElement("#root");

function Contact() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [prod, setProd] = useState('')
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
  const changeHandler = (e) => {
    setProd({ ...prod, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    axios
      .post("http://localhost:5000/contact", prod)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert("Successfully");
      });
    e.preventDefault();
  };
  return (
    <>
      <div className="wrapper cont">
        <div className="container">
          <div className="contact1">
            <div className="inp">
              <form onSubmit={onSubmit}>
                <p className="conp">{t("in1")}</p>
                <input
                  type="text"
                  className="form-control btn-outline-lime contactinput"
                  required
                  onChange={changeHandler}
                />
                <p className="conp">{t("in2")}</p>
                <input
                  type="text"
                  className="form-control btn-outline-lime contactinput"
                  required
                  onChange={changeHandler}
                />
                <p className="conp">{t("in3")}</p>
                <input
                  type="text"
                  className="form-control btn-outline-lime contactinput"
                  required
                  onChange={changeHandler}
                />
                <p className="conp">{t("in4")}</p>
                <textarea
                  className="form-control btn-outline-lime contactinput"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  onChange={changeHandler}
                ></textarea>
                <div className="bytton">
                  <button
                    type="submit"
                    className=" bitton"
                    onClick={() => {
                      setmodalIsOpen(true);
                    }}
                  >
                    {t("bt1")}
                  </button>
                </div>
              </form>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setmodalIsOpen(false)}
                style={{
                  content: {
                    width: 500,
                    height: 230,
                    marginLeft: 380,
                    marginTop: 150,
                    borderRadius: 20,
                    border: 2,
                    border: "solid",
                    borderColor: "orange",
                  },
                }}
              >
                <div className="modalContainer">
                  <button
                    className="modalBut"
                    onClick={() => setmodalIsOpen(false)}
                  >
                    {" "}
                    X{" "}
                  </button>
                  <div className="modalTitle">
                    <AiOutlineCheckCircle />
                    <p>{t("md1")}</p>
                    <button
                      className="modalBut1"
                      onClick={() => setmodalIsOpen(false)}
                    >
                      {" "}
                      OK{" "}
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className="contact2">
          <div className="conH">
            <h2>{t("md2")}</h2>
          </div>
          <div className="row">
            <div className="col-md-6 conR">
              <p className="conp2">{t("md3")}</p>
              <p className="conp2">{t("md4")}</p>
              <p className="conp2">
                {t("md5")}
                <br /> {t("md8")}
              </p>
            </div>
            <div className="col-md-6 conR1">
              <p className="conp2">{t("md6")}</p>
              <p className="conp2">+998 91 6756789</p>
              <p className="conp2">+998 33 7865435</p>
              <p className="conp2">+998 99 6722089</p>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="conH">
            <h1 className="conH">{t("md7")}</h1>
            <YMaps>
              <div className="Maps">
                <Map
                  className="maps1"
                  defaultState={{
                    center: [40.385754, 71.786232],
                    zoom: 16,
                  }}
                >
                  <Placemark geometry={[40.385754, 71.786232]} />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
        <div className="contact3">
          <div className="conH">
            <h2>{t("cd1")}</h2>
          </div>
          <p className="con3p">{t("cd2")}</p>
        </div>
      </div>

    </>
  );
}

export default Contact;
