import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { imageItems } from "../constImages/constimages";
import { StyledRow } from "../productlist/productslist.styles";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartactions";
import {
  StyledButton,
  StyledDivMinus,
  StyledDivPlus,
  StyledH5,
  StyledIMG,
  StyledSPAN,
  StyledMainDiv,
  StyledTIT,
  StyledInput,
} from "./Productdetails.styled";

import _ from 'lodash';

const ProductDetails = () => {
  const [qty, setQTY] = useState(1);
  let image: any;

  const dispatch = useDispatch();
  const getProductListDetails = useSelector(
    (state: any) => state.getProductDetails
  );

  const { product } = getProductListDetails;

  const isEmpty = _.isEmpty(product)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDetails(id as string));
    
  }, [dispatch]);
 
  if (!isEmpty) {
    image = imageItems.find((image1) => product.image.includes(image1.name));
  }
  const HomePage = () => {
    navigate("/");
  };
  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty))
    navigate("/cart");
  };
  const hanleQtychange = useCallback((action:any) =>{
    if(action ==='add'){
    setQTY(prevQty => prevQty+ 1)
    }
    else{
        setQTY(prevQty => Math.max(prevQty- 1, 1))
    }
  },[])
 
  return (
    <>
      <hr />
      {!isEmpty && (
        <div>
          <StyledH5>
            <StyledSPAN onClick={HomePage}>HOME/</StyledSPAN>
            <StyledSPAN onClick={HomePage}>PLATES/</StyledSPAN>
            <StyledTIT>{product.title}</StyledTIT>
          </StyledH5>
          <div className="container">
            <StyledRow className="row mthp">
              <div className="col-lg-6">
                <StyledIMG src={image?.src} alt="imageHomePage"/>
              </div>
              <div className="col-lg-6">
                <p>{product.brand}</p>
                <h1>{product.title}</h1>
                <p>${(product.price*qty).toFixed(2)}</p>
                <p>{product.description}</p>
                <hr />
                <StyledInput type='text' value={qty} role='textbox'/>
                <StyledMainDiv>
                  <StyledDivPlus onClick={() => hanleQtychange('add')}>+</StyledDivPlus>
                  <StyledDivMinus onClick={() =>hanleQtychange('remove')}>-</StyledDivMinus>
                  <StyledButton onClick={addToCartHandler}>
                    ADD TO CART
                  </StyledButton>
                </StyledMainDiv>
              </div>
            </StyledRow>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
