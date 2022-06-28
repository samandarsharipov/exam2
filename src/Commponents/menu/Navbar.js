import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { AiTwotoneHome } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

function Navbar() {
  const { t } = useTranslation();
  const language = [
    {
      code: "uz",
      name: "Uzbek",
      country_code: "uz"
    },
    {
      code: "en",
      name: "English",
      country_code: "gb"
    },
    {
      code: "pу",
      name: "Pусский",
      country_code: "py"
    }
  ];
  return (
    <>
      <nav>
        <div className="credit container">
          <div className="row fan">
            <div className="col-md-6 fano">
              <p className="menuh">Credit.shop</p>
              <Link to="/admin" className="security">
                <MdSecurity />
              </Link>
              <Link to="/" className="menunav">
                <span data-hover="Asosiy">{t("asosiy")}</span>
                <AiTwotoneHome className="mainly" />
              </Link>
              <Link to="/" className="menunav">
                <span data-hover="Mahsulotlar">{t("mahsulotlar")}</span>
                <CgMenuGridO className="mainly1" />
              </Link>
            </div>
            <div className="col-md-3 fan1">

              <div className="dropdown">
                <button
                  className="btn glob btn-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsGlobe />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {language.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <button className="dropdown-item"
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        <span className="{`flag-icon flag-icon-${country_code}`}"></span>
                        {name}
                      </button>
                    </li>
                  )
                  )}
                </ul>
              </div>

            </div>
            <div className="col-md-3 menu1">
              <Link to="/contact" className="menuc">
                <span data-hover="Contact">
                  <TiLocation />
                </span>
              </Link>
              <Link to="/korzinka" className="menuc1">
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
