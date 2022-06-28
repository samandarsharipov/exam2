import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios  from 'axios';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import './Order.css';
import rasm from './is.jpg'
import { useTranslation } from "react-i18next";


function Orders() {
    let a=0
    let a1=0
    const [ism, setIsm] = useState("")
    const [tel, setTel] = useState("")
    const [adres, setAdres] = useState("")
    const [prikaz , setPrikaz] = useState({
        name: "",
        tel_number: "",
        adress:"",
        products: [],
        credit_month: "",
        answer: ""
    })
    
    const navigate = useNavigate()
    const zakas = useSelector(state => state)
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'Delete_Order', payload: id })   
        console.log(zakas);
    }

    // buttonlar uchun f-ya
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    // umumiy summani hisoblaydigan f-ya
    let b1,b2,b3;
    for(let i=0; i<zakas.length; i++){
        a+=zakas[i].price*zakas[i].count
        a1+=zakas[i].price*zakas[i].count
        b1=Math.floor(a1/1000000)
        b2=Math.floor((a1%1000000)/1000)
        b3=a1%1000
    }
        
    // modalni ko'rsatadigan f-ya
    const showModal=()=>{
        document.querySelector(".modaliddin").style.display="block"
    }
    const closeModal=(e)=>{
        e.preventDefault()
        document.querySelector(".modaliddin").style.display="none"
    }


    // danniylarni jo'natadigan f-ya
    
    const sendData=(e)=>{
        e.preventDefault()
        
        if(ism.length<8 || tel.length<13 || adres.length<10){
            alert("Ma'lumotlaringizni to'liq kiriting")
            return false
        }

        prikaz.name=ism
        prikaz.tel_number=tel
        prikaz.adress=adres
        prikaz.products=zakas
        prikaz.credit_month=toggleState
        prikaz.answer=true
        document.querySelector(".atvet").style.display="block"
        console.log(prikaz);

        axios
            .post('http://localhost:5000/order', prikaz)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    // history.push('/table')
        
    }
    console.log(zakas)

    // modalni yopadigan f-ya
    const Okkey=()=>{
        document.querySelector(".atvet").style.display="none"
        document.querySelector(".modaliddin").style.display="none"
    }


let oylik=[];
let umumiy=[];

// jadvalni yaratadigan f-ya
    for (let i=toggleState; i>0; i--) {
        let b=Math.floor(a/i)
        a-=b
        oylik.push(b)
        umumiy.push(a)
        
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
        <>
            <div className="container bg-white shadow mt-5 p-5">
                {/* Tanlangan texnikalar */}
                <div className='choices'>
                {
                    zakas.map(order=>{
                        return(
                            <div key={Math.random()*100} className='row justify-content-between align-items-center mt-5'>
                        <div className='align-items-center haligi col-12 d-flex justify-content-between'>
                            <div className='col-md-3 col-5 image overflow-hidden'>
                                <img className="w-100" src={"http://localhost:5000/" + order.files[0].filePath} alt='telefon' />
                            </div>
                            <div className='col-md-9 col-7 kaunt'>
                                <div className='row btnnrx justify-content-around'>
                                    {/* nom va narx */}
                                    <div className='col-md-5 col-8 info mt-5 '>
                                        <h4 className='nameProduct'>{order.name}</h4>
                                        <h5 className='narhi'>UZS {order.price}</h5>
                                    </div>
                                    
                                    {/* counter qismi */}

                                        <div className='col-md-5 col-8 row align-items-center justify-content-between'>
                                            <div className='col-9'>
                                                <div className='row justify-content-between  '>
                                                    <div className='col-6'>
                                                        <div className='row counter p-1'>
                                                            <button button className='minbtn kaunter col-4 col-md-4 text-white' onClick={()=>{
                                                                order.count=order.count-1
                                                                navigate('/korzinka')
                                                            }}>-</button>
                                                            <span className='col-4 col-md-4 bg-white'>
                                                                <h3 className='quantity'>{order.count}</h3>
                                                            </span>
                                                            <button button className='addbtn kaunter col-4 col-md-4 text-white' onClick={()=>{
                                                                order.count=order.count+1
                                                                navigate('/korzinka')
                                                            }}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 udalit'>
                                                        <button className='col delet' onClick={() => deleteContact(order._id)}>
                                                            <AiOutlineCloseCircle  className='udalitBtn rounded-circle bg-danger text-light'/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
                </div>

                {/* To'lov muddati */}
                <h3 className='mt-5'>{t("or1")}</h3>
                <div className='btnlar mt-5'>
                    <button onMouseDown={() => toggleTab(3)} className={toggleState === 3 ? "srok srokActive" : "srok"}>
                        3 {t("or2")} 
                    </button>
                    <button onMouseDown={() => toggleTab(4)} className={toggleState === 4 ? "srok srokActive" : "srok"}>
                        4 {t("or2")} 
                    </button>
                    <button onMouseDown={() => toggleTab(6)} className={toggleState === 6 ? "srok srokActive" : "srok"}>
                        6 {t("or2")}
                    </button>
                    <button onMouseDown={() => toggleTab(12)} className={toggleState === 12 ? "srok srokActive" : "srok"}>
                        12 {t("or2")} 
                    </button>
                    <button onMouseDown={() => toggleTab(24)} className={toggleState === 24 ? "srok srokActive" : "srok"}>
                        24 {t("or2")} 
                    </button>
                    <button onMouseDown={() => toggleTab(36)} className={toggleState === 36 ? "srok srokActive" : "srok"}>
                        36 {t("or2")} 
                    </button>
                </div>
                    
                {/* To'lov haqida ma'lumotlar */}
                <div className='pt-5'>
                    <h3>{t("or3")}</h3>
                    <div>
                        <table className='hisob mt-3 table table-bordered' border="2px">
                                <tr>
                                    <th className='px-4 firstStr'>{t("or4")}</th>
                                    <th className='px-4 firstStr'>{t("or5")}</th>
                                </tr>
                                {
                                    oylik.map((item, index)=>{
                                        return(
                                            <tr key={Math.random()*1000}>
                                                <td className="px-4 valyus">{index+1} - {t("or6")} </td>
                                                <td className="px-4 valyus">{item} {t("or7")} </td>
                                            </tr>
                                        )
                                    })
                                }
                        </table>
                        <table className='hisob mt-3 table table-bordered' border="2px">
                                <tr>
                                    <th className='px-4 firstStr'>{t("or8")}</th>
                                </tr>
                                {
                                    umumiy.map((item, index)=>{
                                        return(
                                            <tr key={Math.random()*1000}>
                                                <td className="px-4 valyus">{item}{t("or9")} </td>
                                            </tr>
                                        )
                                    })
                                }
                        </table>
                    </div>
                    <h1 className='allPrice mt-3 mx-3'>{t("or10")}: {b1},{b2},{b3}{t("or11")}</h1>
                </div>
                <button className='zakazat mt-5' onClick={showModal}>
                    <span>{t("or12")}</span>
                    <FaShoppingCart className='shop' />
                </button>
            </div>

            {/* modal */}

            <div className='modaliddin'>
                <div className='madal-kantent'>
                    <form>
                        <button className="kloz" onClick={closeModal}>
                            <AiOutlineCloseCircle  className='rounded-circle bg-danger text-light'/>
                        </button>
                        <h5>{t("or13")}</h5>
                        <input 
                            className='ism' 
                            type="text" 
                            name="ism" 
                            placeholder='Ism va familiyangizni kiriting' 
                            value={ism}
                            onChange={e=>setIsm(e.target.value)}
                        />
                        <h5>{t("or14")}</h5>
                        <input 
                            className='telRaqam' 
                            type="text" 
                            name="tel"
                            placeholder="Telefon raqamingizni to'liq kiriting"
                            value={tel}
                            onChange={e=>setTel(e.target.value)}
                        />
                        <h5>{t("or15")}</h5>
                        <input 
                            className='manzil' 
                            type="text" 
                            name="address"
                            placeholder='Manzilingizni kiriting' 
                            value={adres}
                            onChange={e=>setAdres(e.target.value)}
                        />
                        <input type="submit" onClick={sendData} className='otpravit' value="Jo'natish" />
                    </form>
                </div>
                <div className='atvet'>
                    <div className='atvet-kantent px-5'>
                        <h1 className='text-center display-1'>
                            <AiOutlineCheckCircle className='mt-3 rounded-circle bg-success text-light okkey' />
                        </h1>
                        <h4 className='text-center'>
                        {t("or16")}
                        </h4>
                        <button className='otpravit' onClick={Okkey}>OK</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;
