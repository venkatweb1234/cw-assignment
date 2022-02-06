import { render, screen,fireEvent } from "@testing-library/react";
import { cartItemProps } from "..";
import CartItem from "..";
const mockProps:cartItemProps  = {
   item: {
    id: '1',
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "blue.jpg",
    quantity: 1,
  },
  qtyChangeHandler:jest.fn(),
  removeHandler:jest.fn()
  };

  describe('render CartItem component', () =>{
      beforeEach(() =>{
          render(
              <CartItem {...mockProps}/>
          )
      });

      it('Should display cart item image', () =>{
          expect(screen.getByAltText('cart_item_image')).toBeInTheDocument();
          expect(screen.getByText(mockProps.item.title)).toBeInTheDocument();
          expect(screen.getByText(mockProps.item.brand)).toBeInTheDocument();
      })
      it("render input text field display correctly", () => {
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toHaveTextContent("1");
      });

      it("Should increase cart item quantity when user clicks on plus button", () => {
        const plus_button = screen.getByText("+");
        expect(plus_button).toBeInTheDocument();
        fireEvent.click(plus_button);
        expect(screen.getByRole("textbox")).toHaveTextContent("2");
        fireEvent.click(plus_button);
        expect(screen.getByRole("textbox")).toHaveTextContent("3");
      });
      it("Should decrease cart item quantity when user clicks on minus button", () => {
        const minus_button = screen.getByText("-");
        expect(minus_button).toBeInTheDocument();
        fireEvent.click(minus_button);
        expect(screen.getByRole("textbox")).toHaveTextContent("1");
        fireEvent.click(minus_button);
        expect(screen.getByRole("textbox")).toHaveTextContent("1");
        const plus_button = screen.getByText("+");
        fireEvent.click(plus_button);
        expect(screen.getByRole("textbox")).toHaveTextContent("2");
        fireEvent.click(plus_button);
        expect(screen.getByRole("textbox")).toHaveTextContent("3");
      });

      it("Should remove specific mycart item from cart when user clicks on remove button ", () => {
        const remove_button = screen.getByRole("button");
        expect(remove_button).toBeInTheDocument();
        fireEvent.click(remove_button);
        expect(
          screen.getByText(mockProps.item.title)
        ).toBeInTheDocument();
      });
  })