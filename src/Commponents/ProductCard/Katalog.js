import React, {useState} from "react";
import "./ProductCard.css";
import kalyaska from "./productImg/kalyaska.jpg";
import phones from "./productImg/phones.jpg";
import uyjihoz from "./productImg/uyjihoz.jpg";
import mashishy from "./productImg/mashishy.jpg";
import Elektronika from "./katalogmenu/Elektronika";
import BolalarDunyosi from "./katalogmenu/BolalarDunyosi";
import UyJihoz from "./katalogmenu/UyJihoz";
import Maishiy from "./katalogmenu/Maishiy";
import { useTranslation } from "react-i18next";
function Katalog() {
 
  const [elektronika, setElektronika] = useState(false)
  const [bola, setBola] = useState(false)
  const [uy, setUy] = useState(false)
  const [texnika, setTexnika] = useState(false)

  const clickElektronika = () =>{
    setBola(false)
    setUy(false)
    setTexnika(false)
    setElektronika(!elektronika)
  }
  const clickBola = () =>{
    setElektronika(false)
    setTexnika(false)
    setUy(false)
    setBola(!bola)
  }
  const clickUy = () =>{
    setElektronika(false)
    setBola(false)
    setTexnika(false)
    setUy(!uy)
  }
  const clickTexnika = () =>{
    setElektronika(false)
    setBola(false)
    setUy(false)
    setTexnika(!texnika)
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

  return (
    <div className="container containerHome">


      <div className="katalog">
        <h2 className="text-center titleKat">{t("kt1")}</h2>
        <div className="boxKatlog" onClick={()=>clickBola()}>
          <img className="imgKatalog" src={kalyaska} alt="kalyaska" />
          <h4 className="nameKatalogH4">{t("kt2")}</h4>
           
        </div>

        <div className="boxKatlog" onClick={()=>clickElektronika()}>
          <img className="imgKatalog" src={phones} alt="phones" />
          <h4 className="nameKatalogH4">{t("kt3")}</h4>
        </div>

        <div className="boxKatlog" onClick={ ()=>clickUy()} >
          <img className="imgKatalog" src={uyjihoz} alt="uyjihoz" />
          <h4 className="nameKatalogH4">{t("kt4")}</h4>
        </div>

        <div className="boxKatlog" onClick={ ()=>clickTexnika()} >
          <img className="imgKatalog" src={mashishy} alt="mashishy" />
          <h4 className="nameKatalogH4">{t("kt5")}</h4>
        </div>
      </div>

      {elektronika ? <Elektronika /> : null}
      {bola ? <BolalarDunyosi/> : null}
      {uy ? <UyJihoz/> : null}
      {texnika ? <Maishiy/> : null}
    </div>
  );
}

export default Katalog;
