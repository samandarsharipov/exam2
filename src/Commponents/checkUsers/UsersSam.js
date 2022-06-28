import "./Users.css";
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import a52 from "./a52.jpg";


function UsersSam() {
  const [prod, setProd] = useState([])

  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/order')
    setProd(res.data)
  }, [])
  const deleteButton = (_id) => {
    const url = `http://localhost:5000/order/${_id}`
    if (window.confirm("O'chirishni xoxlaysizmi?")) {
      axios.delete(url)
    }
    window.location.reload(false);
  }

  const putButton = (_id) => {
    if (window.confirm("Javob berildimi?")) {
      axios.patch(`http://localhost:5000/order/${_id}`, { answer: true })
    }
    window.location.reload(false);
  }
  prod.sort((a, b) => (a.answer > b.answer) ? 1 : -1)
  return (
    <>
      <div className="bg-secondary">
        <div className="bg-light rounded ">
          <div className="container">
            <h2 className="mb-2 p-2">Foydalanuvchilar</h2>
            {
              prod.map((a) => {
                return (
                  <div key={a._id}>
                    <div className='row userRow' style={{ backgroundColor: a.answer === true ? '#B8B2FF' : 'light' }}>
                      <div className="col-md-4">
                        <div className="icon">
                          <FaUser className="iconUSer mt-3" />
                          <div className="Nameuser">
                            <h4>{a.name}</h4>
                            <p className="P2userSam">{a.tel_number}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <p className='mt-3 h5'>To'lov muddati {a.credit_month} oy</p>
                      </div>
                      <div className="col-md-4">
                        <div className="biconPhopne11">
                          <div className="buttonsUSer">
                            <button
                              type="button"
                              className="btn btn-outline-success buton1user"
                              onClick={() => {
                                putButton(a._id);
                              }}
                            >  Bajarildi  </button>
                            <button type="button" className="btn btn-warning buton1user"
                              onClick={() => { deleteButton(a._id) }}>
                              O'chirish
                            </button>
                          </div>
                        </div>
                      </div>
                      {
                        a.products.map((b) => {
                          return (
                            <div className="col-md-3">
                              <div className="card cardchProductt d-inline-block my-3">
                                <img className="imgPrductCardd" src={a52} alt="a52" />
                                <div className="titleProductt">
                                  <h4 className='h44'>{b.name}</h4>
                                  <p className="productPricee">{b.price}</p>
                                </div>
                                <div>
                                  <p className='m-0'>soni: {b.size} ta</p>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersSam;
