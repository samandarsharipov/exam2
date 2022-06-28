import React, {useState} from 'react';
import "../ProductCard.css";

function Elektronika() {
  return (
    <> 
     <div className="middlePart my-5">
        <div className="container contacol">
          <h1 className="text-center textmiddl">Elektronika</h1>
          <div className="row">

            <div className="col-md-4">
              <h5 className="textelek my-4"><span className="panspro">Telefonlar</span></h5>
              <h5 className="textelek my-4">Planshetlar</h5>
              <h5 className="textelek my-4">Quloqchinlar</h5>
              <h5 className="textelek my-4">Tashqi xotira chiplar</h5>
              <h5 className="textelek my-4">Qo'l soatlar</h5>  </div>

            <div className="col-md-4">
              <h5 className="textelek my-4">Skanerlar</h5>
              <h5 className="textelek my-4">Tugmacchali telefonlar</h5>
              <h5 className="textelek my-4">Telefon uchun aksesuarlar</h5>
              <h5 className="textelek my-4">Nootbuk uchun aksesuarlar</h5>
              <h5 className="textelek my-4">Kompyuterlar uchun aksesuarlar</h5>  </div>

            <div className="col-md-4">
              <h5 className="textelek my-4">Nootbyklar</h5>
              <h5 className="textelek my-4">Stol kompyuterlar</h5>
              <h5 className="textelek my-4">printerlar</h5>
              <h5 className="textelek my-4">Quvvatlovchi qurilmalar</h5>
              <h5 className="textelek my-4">Hammasini ko'rsatish</h5>  </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Elektronika;