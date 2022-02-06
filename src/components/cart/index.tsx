import {
  StyledH2,
  StyledMainDiv,
  StyleULDiv,
  StyledSubTotal,
  StyledTotal,
  StyledCartShop,
  StyledBtnShop,
} from "./cart.styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../cartitem";
import { addToCart, removeToCart } from "../redux/actions/cartactions";
import { CartProduct } from "../types";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id: string, qty: number) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id: string) => {
    dispatch(removeToCart(id));
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
  return (
    <>
      <StyledMainDiv>
        <StyledH2>Shopping Cart</StyledH2>
        <StyleULDiv>
          {!cartItems.length ? (
            <div className="CartEmpty">
              <h2>Your Cart is Empty</h2>
              <Link to="/">CONTINUE SHOPPING</Link>
            </div>
          ) : (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan={2}>PRODUCT</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                {cartItems.map((item: CartProduct) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeFromCartHandler}
                  />
                ))}
              </table>
              <div>
                <div className="cart__overview">
                  <p>CART OVERVIEW</p>
                  <p>
                    SUBTOTAL&nbsp;
                    <StyledSubTotal>${getCartSubTotal()}</StyledSubTotal>
                  </p>
                  <p>
                    TOTAL &nbsp;<StyledTotal>${getCartSubTotal()}</StyledTotal>
                  </p>
                </div>
                <StyledCartShop>
                  <Link to="/" className="con_shop_cart">
                    CONTINUE SHOPPING
                  </Link>
                  <StyledBtnShop>CHECKOUT ${getCartSubTotal()}</StyledBtnShop>
                </StyledCartShop>
              </div>
            </>
          )}
        </StyleULDiv>
      </StyledMainDiv>
    </>
  );
};

export default Cart;
