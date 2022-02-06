import { Product } from "../types";
import { imageItems } from "../constImages/constimages";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { addToCart } from "../redux/actions/cartactions";
import { useDispatch } from "react-redux";
export interface props {
  item: Product;
}
const ProductItem = ({ item }: props) => {
  const image = imageItems.find((image1) => item.image.includes(image1.name));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoProductDetails = useCallback(({ id }) => {
    navigate(`/productDetails/${id}`);
  }, []);
  const gotoMyCart = useCallback(({ id }) => {
    dispatch(addToCart(id, 1))
    navigate(`/cart`);
  }, []);

  return (
    <>
      <div className="card-group">
        <div className="card card__image">
          <div className="image">
            <img
              className="card-img-top image__img"
              src={image?.src}
              alt="Card image cap"
            />
            <div className="image__overlay image__overlay--blur">
              <div className="image__description">
                <img
                  className="card-img-top card__image__cap"
                  src={image?.src}
                  alt="overlay card image cap"
                />
                <div className="view_cart_details">
                  <button role='button' className="view_details" onClick={() =>gotoProductDetails(item)}>
                    VIEW DETAILS
                  </button>
                </div>
                <div className="add_cart_details">
                  <button role='button' className="add_to_cart" onClick={() => gotoMyCart(item)}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-text">{item.brand}</p>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">${item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
