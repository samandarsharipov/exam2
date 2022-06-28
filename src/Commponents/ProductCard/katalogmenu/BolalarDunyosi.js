import React from 'react';
import { useTranslation } from "react-i18next";

function BolalarDunyosi() {
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
   <div className="middlePart my-5">
        <div className="container contacol">
          <h1 className="text-center textmiddl">{t("kt2")}</h1>
          <div className="row">

            <div className="col-md-4">
              <h5 className="textelek my-4"><span className="panspro">{t("bd1")}</span></h5>
              <h5 className="textelek my-4">{t("bd2")}</h5>
              <h5 className="textelek my-4">{t("bd3")}</h5>
              <h5 className="textelek my-4">{t("bd4")}</h5>
              <h5 className="textelek my-4">{t("bd5")}</h5>  </div>

            <div className="col-md-4">
              <h5 className="textelek my-4">{t("bd6")}</h5>
              <h5 className="textelek my-4">{t("bd7")}</h5>
              <h5 className="textelek my-4">{t("bd8")}</h5>
              <h5 className="textelek my-4">{t("bd9")}</h5>
              <h5 className="textelek my-4">{t("bd10")}</h5>  </div>

            <div className="col-md-4">
              <h5 className="textelek my-4">{t("bd11")}</h5>
              <h5 className="textelek my-4">{t("bd12")}</h5>
              <h5 className="textelek my-4">{t("bd13")}</h5>
              <h5 className="textelek my-4">{t("bd14")}</h5>
              <h5 className="textelek my-4">{t("bd15")}</h5>  </div>
          </div>
        </div>
      </div>
  </>
  );
}

export default BolalarDunyosi;