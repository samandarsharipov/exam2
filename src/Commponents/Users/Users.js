import "./Users.css";
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdWarning } from "react-icons/md";
import axios from 'axios';
function Users() {

  const [contact, setContact] = useState([])

  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/contact')
    setContact(res.data)
    console.log(res);
  }, [])


  const deleteUsers = (_id) => {
    const url = `http://localhost:5000/contact/${_id} `
    if (window.confirm("Ochrishni colesanmi")) {
      axios.delete(url)
      window.location.reload(false)
    }

  }


  return (
    <>
      <div className="container">
        <h2 className="text-center my-2 p-2">Foydalanuvchilar</h2>

        {
          contact.map((prod) => {
            return (
                
           <div className="row userRow" style={{backgroundColor: prod.answer == true ? "rgb(189, 182, 182)" : null  }}>
          <div className="col-md-4">
            <div className="icon">
              <FaUser className="iconUSer" />
              <div className="Nameuser">
                <h4>{prod.name}</h4>
                <p className="pUser">
                  {prod.question}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <p className="P2user">{prod.tel_number}</p>
          </div>

          <div className="col-md-4" >
            <div className="biconPhopne11">
              <div className="buttonsUSer">
                <button
                  type="button"
                  className="btn btn-outline-success buton1user"
                  // onClick={() => {putUser(prod._id)}}
                  >
                  Bajarildi
                </button>
                <button
                  onClick={() => {deleteUsers(prod._id) }}
                 type="button" 
                 className="btn btn-warning buton1user">
                  O'chrish
                </button>
              </div>
            </div>
          </div>
          </div> 
         
      )
             })
           }
    </div>


     
    </>
  );
}

export default Users;
