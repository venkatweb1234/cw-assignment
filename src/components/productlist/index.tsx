import  { useEffect } from "react";
import Header from "../header";
import ProductItem from "../productitem";
import { Product } from "../types";
import { StyledRow } from "./productslist.styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";
const ProductsList = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state: any) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="container fluid">
        <StyledRow className="row">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((item: Product) => (
              <div className="col-lg-4">
                <ProductItem item={item} key={item.id}/>
              </div>
            ))
          )}
        </StyledRow>
      </div>
    </>
  );
};

export default ProductsList;
