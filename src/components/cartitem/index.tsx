import { useCallback, useState, useRef } from "react";
import { imageItems } from "../constImages/constimages";
import { CartProduct } from "../types";
import {
  StyledDivMinus,
  StyledItemBtnClose,
  StyledDivPlus,
  StyledInput,
  StyledImgs,
  StyledItemBrandTD,
  StyledItemPriceTD,
} from "./cartItem.styles";
export type cartItemProps = {
  item: CartProduct;
  qtyChangeHandler: (value1: string, value2: number) => void;
  removeHandler: (value: string) => void;
};

const CartItem = ({ item, qtyChangeHandler, removeHandler }: cartItemProps) => {
  const [qty, setQTY] = useState(item.quantity);
  const inputRef = useRef<HTMLInputElement>(null);
  const hanleQtychange = useCallback((action: string) => {
    if (action === "add") {
      setQTY((prevQty: number) => prevQty + 1);
      qtyChangeHandler(item.id, Number(inputRef.current?.value) + 1);
    } else {
      setQTY((prevQty: number) => Math.max(prevQty - 1, 1));
      qtyChangeHandler(
        item.id,
        Math.max(Number(inputRef.current?.value) - 1, 1)
      );
    }
  }, []);
  const image = imageItems.find((image1) => item.image.includes(image1.name));
  return (
    <>
      <tbody>
        <tr>
          <td></td>
          <td>
            <StyledImgs src={image?.src} alt="cart_item_image"/>
          </td>
          <StyledItemBrandTD>
            <p>{item.brand}</p>
            <p className="iteTit">{item.title}</p>
          </StyledItemBrandTD>
          <td className="pstd">
            {" "}
            <StyledInput type="text" value={qty} ref={inputRef} role='textbox'/>
            <StyledDivPlus
              onClick={() => {
                hanleQtychange("add");
              }}
            >
              +
            </StyledDivPlus>
            <br />
            <StyledDivMinus
              onClick={() => {
                hanleQtychange("remove");
              }}
            >
              -
            </StyledDivMinus>
          </td>
          <StyledItemPriceTD>
            ${(item.price * qty).toFixed(2)}
          </StyledItemPriceTD>
          <StyledItemBtnClose>
            <button
             role='button'
              type="button"
              className="btn-close"
              aria-label="Close"
              data-testid ='removeBtn'
              onClick={() => removeHandler(item.id)}
            ></button>
          </StyledItemBtnClose>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
