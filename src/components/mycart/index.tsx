import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeToCart } from '../redux/actions/cartactions';
import { imageItems } from "../constImages/constimages";
import { useNavigate } from 'react-router-dom';
import { CartProduct } from '../types';
import {StyledMyCart,StyledP, StyledMycart, StyledButton, StyledMyCartImg, StyledTD, StyledCross, StyledTotalTD, StyledPriceSPAN, StyledCartTD, StyledViewBTN, StyledTDCHK, StyledChkButton} from './mycart.styles'
const Mycart = () => {
    const cart = useSelector((state: any) => state.cart);
    const { cartItems } = cart;
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  useEffect(() => {
    setShowPopup(false);
  }, []);
  const removeFromCartHandler = (id: string) => {
    dispatch(removeToCart(id));
  };
  const mycartDropDown = () => {
    setShowPopup(!showPopup);
  };
  const goToCart = () => {
    navigate("/cart");
  };
  const goCheckout = () => {
    navigate("/checkout");
  };
  const getCartSubTotal = () => {
    return cartItems
      .reduce(
        (price: number, item: CartProduct) =>
          price + item.price * item.quantity,
        0
      )
      .toFixed(2);
  };
  return <><StyledMyCart className="dropdown show" onClick={mycartDropDown}>
  {" "}
  <StyledButton role='button'
    className="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    MY CART({cartItems?.length || 0})
  </StyledButton>
</StyledMyCart>
{showPopup && (
<StyledMycart data-testid ='dropmenu'>
{cartItems.length ? (
  <table>
    <tbody>
      {cartItems.map((item: CartProduct) => {
        const image = imageItems.find((image1) =>
          item.image.includes(image1.name)
        );
        return (
          <>
            <tr>
              <td>
                <StyledMyCartImg src={image?.src} alt={`Mycartimage${item.id}`} />
              </td>
              <StyledTD>
                <h6>{item.title}</h6>
                <p>x{item.quantity}</p>
                <p className="text-uppercase text-muted fw-bold">
                  {item.brand}
                </p>
                <p className="fw-bold">${item.price}</p>
              </StyledTD>
              <StyledCross>
                <button 
                role='button'
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => removeFromCartHandler(item.id)}
                ></button>
              </StyledCross>
            </tr>
          </>
        );
      })}
      <tr>
        <StyledTotalTD>
          TOTAL<StyledPriceSPAN>${getCartSubTotal()}</StyledPriceSPAN>
        </StyledTotalTD>
        <StyledCartTD>
          <span>
            <StyledViewBTN onClick={goToCart}>
              View Cart
            </StyledViewBTN>
          </span>
        </StyledCartTD>
        <StyledTDCHK>
          <span>
            <StyledChkButton onClick={goCheckout}>
              CHECKOUT
            </StyledChkButton>
          </span>{" "}
        </StyledTDCHK>
      </tr>
    </tbody>
  </table>
) : (
  <StyledP>No Cart Available</StyledP>
)}
</StyledMycart>
)}</>;
};

export default Mycart;
