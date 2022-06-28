import ProductCard from "./Commponents/ProductCard/ProductCard";
import Users from "./Commponents/Users/Users";
import AddProduct from "./Commponents/AddProduct/AddProduct";
import EditProduct from "./Commponents/productEdit/EditProduct";
import Navbar from './Commponents/menu/Navbar';
import UsersSam from "./Commponents/checkUsers/UsersSam";
import Orders from "./Commponents/Orders/Orders";
import Home from "./Commponents/HomePage/Home"
import Tavsif from "./Commponents/recomend/recomend/Tavsif"
import Contact from "./Commponents/contact/Contact";
import Footer from "./Commponents/footer/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route exact path="/" element={<Home />} />
        <Route path="/korzinka" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/admin" element={<ProductCard />} />
        <Route path="/tavsif/:id" element={<Tavsif />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
