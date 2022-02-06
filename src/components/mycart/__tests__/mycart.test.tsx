import { fireEvent, render, screen } from "@testing-library/react";
import Mycart from "..";
import { Provider } from "react-redux";
import { createStore } from "redux";
const mockEmptyCartItems = {
  cart: {
    cartItems: [],
  },
};
const mockStoreWithcartItems = {
  cart: {
    cartItems: [
      {
        id: 1,
        title: "Blue Stripe Stoneware Plate",
        brand: "Kiriko",
        price: 40,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        image: "blue.jpg",
        quantity: 1,
      },
      {
        id: 4,
        title: "Mashiko-Yaki Green Small Plate",
        brand: "Kiriko",
        price: 28,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        image: "green.jpg",
        quantity: 3,
      },
    ],
  },
};

// pay attention to write it at the top level of your file
const mockedUseNavigate = jest.fn();
const mockedUseDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));
jest.mock("react-redux", () => ({
  ...(jest.requireActual("react-redux") as any),
  useDispatch: () => mockedUseDispatch,
}));

describe("MyCart Component with mock without cartItems", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockEmptyCartItems)}>
        <Mycart />
      </Provider>
    );
  });
  it("Should render MyCart dropdown with empty cart details ", () => {
    expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
    expect(
      screen.getByText(`MY CART(${mockEmptyCartItems.cart.cartItems.length})`)
    ).toBeInTheDocument();
  });
  it("Should show cart items list when users clicks on my Cart drop down", () => {
    const my_cart_button = screen.getAllByRole("button")[0];
    fireEvent.click(my_cart_button);
    expect(screen.getByTestId("dropmenu")).toBeVisible();
    expect(screen.getByText("No Cart Available")).toBeInTheDocument();
    fireEvent.click(my_cart_button);
    expect(screen.queryByTestId("dropmenu")).toBeNull();
  });
});

describe("MyCart Component with mock with cartItems", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockStoreWithcartItems)}>
        <Mycart />
      </Provider>
    );
    const my_cart_button = screen.getAllByRole("button")[0];
    fireEvent.click(my_cart_button);
  });
  it("Should render MyCart dropdown with cart details ", () => {
    expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
    expect(
      screen.getByText(
        `MY CART(${mockStoreWithcartItems.cart.cartItems.length})`
      )
    ).toBeInTheDocument();
  });
  it("Should display MyCart details ", () => {
    expect(screen.getByAltText("Mycartimage1")).toBeInTheDocument();
    expect(
      screen.getAllByText(mockStoreWithcartItems.cart.cartItems[0].title)[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(
        "x" + mockStoreWithcartItems.cart.cartItems[0].quantity
      )[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(mockStoreWithcartItems.cart.cartItems[0].brand)[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(
        "$" + mockStoreWithcartItems.cart.cartItems[0].price
      )[0]
    ).toBeInTheDocument();
  });
  it("Should remove specific mycart item from cart when user clicks on remove button", () => {
    const remove_button = screen.getAllByRole("button")[1];
    expect(remove_button).toBeInTheDocument();
    fireEvent.click(remove_button);
    expect(
      screen.getByText(mockStoreWithcartItems.cart.cartItems[0].title)
    ).toBeInTheDocument();
  });

  it("Should navigate product details page when user clicks view details page", () => {
    const view_cart = screen.getByText("View Cart");
    fireEvent.click(view_cart);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/cart");
  });

  it("Should navigate product details page when user clicks checkout details page", () => {
    const checkout_cart = screen.getByText("CHECKOUT");
    fireEvent.click(checkout_cart);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/checkout");
  });
});
