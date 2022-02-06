import moxios from "moxios";
import { removeToCart, addToCart } from "../actions/cartactions";
import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/cartTypes";

const mockDispatch = jest.fn();

const mockCartItems = [
  {
    id: "1",
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "blue.jpg",
    quantity: 1,
  },
  {
    id: "2",
    title: "Hand Painted Blue Flat Dish",
    brand: "Kiriko",
    price: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    image: "hand-painted.jpg",
    quantity: 1,
  },
];
describe("cartItems action", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(``,{})
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("ADD_TO_CART", async() => {
    const expectedState1 = {
      id: "1",
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "blue.jpg",
    };
    addToCart("1", 1)(mockDispatch);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: expectedState1,
        })
        .then(function () {
          expect(mockDispatch).toHaveBeenCalledWith({
            type: ADD_TO_CART,
            payload: mockCartItems[0],
          });
        });
    });
    // expect(mockDispatch).toHaveBeenCalled();
  });
  it("REMOVE_TO_CART", () => {
    removeToCart("1")(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: REMOVE_TO_CART,
      payload: "1",
    });
  });
});
