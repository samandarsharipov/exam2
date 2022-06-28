import React, { useState, useEffect } from "react";
import "./Admin.css";
import { MdSecurity } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 

function Admin() { 
    const navigate = useNavigate()

   const [pas, setPas] = useState({
       login: "",
       password: ""
   })
  
    const [users, setUsers] = useState([])
     useEffect( async () =>{
         let res = await axios.post("http://localhost:5000/admin", pas)
         setUsers(res.data)
        
     }, []) 
  
    const changeHandler = (e) =>{
        setPas({...pas, [e.target.name]: e.target.value})
    }
     
    const Check = () => {
      
      
        if(pas.status = "200"){
            navigate('/ProductCard')
        }else{
            alert('login yoki parol xato')
        }
    }
    
   const Submit = (e) =>{
       e.preventDefault()
   }
  return (
    <>
      <div className="container my-5 contAdmin">
        <form onSubmit={Submit} className="globalBorder">
          <div className="logoAdmin">
            {" "}
            <MdSecurity className="iconADmin " />{" "}
          </div>
          <div className="inputs">
            <input
             className="inputAdmin"
              type="text" 
              placeholder="Login" 
              name="login"
              value={pas.login}
              onChange={changeHandler}    
              />

            <input 
            className="inputAdmin" 
            type="password"
             placeholder="Password"
             name="password"
             value={pas.password}
             onChange={changeHandler}
             />

          </div>
           <input onClick={() =>Check()} value="Login" type="submit" className="buttonAdmin my-5"/>
        </form>
      </div>
    </>
  );
}

export default Admin;
