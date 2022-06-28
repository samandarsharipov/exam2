import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
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
      <div className="wrapper1">
        <div className="contact4">
          <div className="row conT">
            <div className="col-md-8 allPlay">
              <h2 className="con4h">{t("ft1")}</h2>
              <p className="con4p">
              {t("ft2")}
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="con_img"
                src="./imageAbout/Rocket.png"
                width="200"
                height="200"
              ></img>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contact5">
            <div className="row">
              <div className="col-md-8">
                <p className="con5p">
                {t("ft3")}
                </p>
              </div>
              <div className="col-md-4">
                <img
                  className="con1_img"
                  src="./imageAbout/Rocket.png"
                  width="80"
                  height="80"
                ></img>
              </div>
            </div>
          </div>
          <div className="contact6">
            <div className="row">
              <div className="col-md-8">
                <p className="con6p">
                {t("ft4")}
                </p>
              </div>
              <div className="col-md-4">
                <img
                  className="con2_img"
                  src="./imageAbout/girl.png"
                  width="70"
                  height="70"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4 className="Footerh6">{t("ft5")}</h4>
                <p className="footp">{t("ft6")}</p>
                <p className="footp">{t("ft7")}</p>
                <p className="footp">{t("ft8")}</p>
              </div>
              <div className="col-md-4">
                <h4 className="Footerh6">{t("ft9")}</h4>
                <p className="footp">+998 91 6756789</p>
                <p className="footp">+998 33 7865435</p>
                <p className="footp">+998 99 6722089</p>
              </div>
              <div className="col-md-4">
                <h4 className="Footerh6">{t("ft10")}</h4>
                <div className="footericonlar">
                  <FaTelegramPlane className="icontele" />
                  <BsInstagram className="icontele" />
                  <FaYoutube className="icontele" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
