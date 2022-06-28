import React, { useEffect, useState } from "react";
import Katalog from "../ProductCard/Katalog";
import { CgShoppingCart } from "react-icons/cg";
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import './Home.css';
import axios from "axios";
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function Home() {
  const [filterBtn, setFilterBtn] = useState(false)
  const [home, setHome] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/product");
    setHome(res.data);
    console.log(home)
  }, []);

  const dispatch = useDispatch()  

  const Send = (prod) => {
    localStorage.setItem('prod', JSON.stringify(prod))
  }

  const filtercha = () => {
    setFilterBtn(!filterBtn)
  }

  const [prod, setProd] = useState("")

  const Demo = (category) => {
    let result = category
    console.log(result)
    setProd(result)
  }
  const [minx, setMin] = useState()
  const [maxx, setMax] = useState()
  const Minimal = () => {
    let min = document.querySelector("#min")
    let minqty = min.value * 1
    setMin(minqty)
    console.log(minx);
  }

  const addContact = (id) => {
    dispatch({ type: 'Add_Order', payload: id })
  }

  const Maximal = () => {
    let max = document.querySelector("#max")
    let maxqty = max.value * 1
    setMax(maxqty)
    console.log(maxx);
  }

  const [fill, setFill] = useState(home)
  useEffect(async () => {
    setFill(home)
  }, [home]);

  const Show = () => {
    filtercha()
    let filt = home.filter((elem) => {
      if (elem.category === prod && elem.price > minx && elem.price < maxx) {
        return true
      }
    })
    setFill(filt)

  }
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

  const [elem, setElem] = useState({
    name: "",
  });

  const changeHandler = (e) => {

    setElem({ ...elem, [e.target.name]: e.target.value });
    if (elem.name.length <= 1) {
      setFill(home)
    } else {
      let result = home.filter((krod) => {
        let elem1 = krod.name.slice(0, elem.name.length).toLowerCase()
        let elem2 = elem.name.toLowerCase()
        if (elem1 == elem2) {
          return true
        }
      })
      setFill(result)
    }


  };


  return (
    <div className="homeObshi">

      <div className='searchContainer'>
        <div>
          <input
            type="text"
            placeholder="Nima izlayapsiz ?"
            className="form-control searchInput"
            aria-label="Search"
            name="name"
            value={elem.name}
            onInput={changeHandler}
          />
        </div>
        <div>
          <BiSearchAlt2 className='searchIcon' />

        </div>
        <div className="filterBuuton">
          <button
            onClick={() => filtercha()}
            className="btn btn-secondary filterbtn">{t("hm1")}</button>
        </div>
      </div>

      <div className="container">
        {
          filterBtn ? <div className="filter_Search">
            <div className="row rowFilter">
              <h3 className="text-center">{t("hm1")}</h3>
              <hr className="hrfilter" />
              <div className="textFilter ">
                <p className="textFilter text-center">{t("hm2")}</p>
              </div>
              <div className="col-md-6 ">
                <p className="danFilter">{t("hm3")}</p> <input className="inputFilter" placeholder="Min" id="min" onChange={Minimal} />
              </div>
              <div className="col-md-6">
                <p className="danFilter">{t("hm4")}</p> <input className="inputFilter" placeholder="Max" onChange={Maximal} id="max" />
              </div>

              <hr className="hrfilter" />
              <p className="textFilter text-center">{t("hm5")}</p>
              <div className="filterMarka">
                <button className="btnFilter" onClick={() => Demo('Samsung')}>Samsung</button>
                <button className="btnFilter" onClick={() => Demo('Apple')}>Apple</button>
                <button className="btnFilter" onClick={() => Demo('Artel')}>Artel</button>
              </div>

              <div className="filterMarka">
                <button className="btnFilter" onClick={() => Demo('Xiaomi')}>Xiomi</button>
                <button className="btnFilter" onClick={() => Demo('Honor')}>Honor</button>
                <button className="btnFilter" onClick={() => Demo('Oppo')}>OPPO</button>
              </div>

              <div className="filterMarka">
                <button className="btnFilter" onClick={() => Demo('HP')}>HP</button>
                <button className="btnFilter" onClick={() => Demo('Asus')}>Asus</button>
                <button className="btnFilter" onClick={() => Demo('Acer')}>Acer</button>
              </div>

            </div>


            <hr className="hrfilter" />
            <button className="btnFilterClick" onClick={Show}>{t("hm6")}</button>
          </div> : null
        }
      </div>

      <Katalog />

      <div className="container cardHome">
        <div className="row rowHomePRod" >

          {fill.map((prod) => {
            return (

              <div className="col-md-4" key={prod._id}>
                <div className="card cardchProduct my-5">
                  <img className="imgHomeProd" src={"http://localhost:5000/" + prod.files[0].filePath} />
                  <div className="titleProduct">
                    <p className="productTitle">
                      <span>{prod.name}</span>
                    </p>
                    <p className="productHomePrice">${prod.price}</p>
                  </div>

                  <button className="btnHomePRod" onClick={() => Send(prod)}>
                    <Link to={"/tavsif/" + prod._id}>{t("hm7")}</Link>
                  </button>
                  <CgShoppingCart
                  onClick={() => addContact(prod)}
                  className="iconHomeProd" />
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
