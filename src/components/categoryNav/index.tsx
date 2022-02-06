import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../navbar";
import ProductsList from "../productlist";
import ProductDetails from "../productdetails";
import Cart from "../cart";
import Checkout from "../checkout";
import Shop from "../shop";
import Journal from "../journal";
import More from "../../more";
const CategoryNav = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsList />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/journal" element={<Journal />}/>
          <Route path="/more"  element={<More/>}/>
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default CategoryNav;
