import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import Cart from "..";
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

describe("Cart Component with mock without cartItems", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockEmptyCartItems)}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Should render shopping cart text", () => {
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
  it("Should render Empty cart message ", () => {
    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
  });
  it("Should navigate home page when user click the continue shopping", () => {
    const continue_shopping = screen.getByText("CONTINUE SHOPPING");
    fireEvent.click(continue_shopping);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
});

describe("Cart Component with mock with cartItems", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockStoreWithcartItems)}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Should render table th content", () => {
    expect(screen.getByText("PRODUCT")).toBeInTheDocument();
    expect(screen.getByText("QUANTITY")).toBeInTheDocument();
    expect(screen.getByText("TOTAL")).toBeInTheDocument();
    expect(screen.getByText("ACTION")).toBeInTheDocument();
  });
  it("Should render cart overview text ", () => {
    expect(screen.getByText("CART OVERVIEW")).toBeInTheDocument();
  });
  it("Should navigate home page when user click the continue shopping", () => {
    const continue_shopping = screen.getByText("CONTINUE SHOPPING");
    fireEvent.click(continue_shopping);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });

  it("Should increase quantity of item when user clicks plus button", () => {
    const first_item_plus_button = screen.getAllByText("+")[0];
    fireEvent.click(first_item_plus_button);
    expect(mockedUseDispatch()).toHaveBeenCalled();
  });

  it("Should remove the specific item from cartitems when user clicks on remove button", () => {
    const first_item_remove_button = screen.getAllByTestId("removeBtn")[0];
    fireEvent.click(first_item_remove_button);
    expect(mockedUseDispatch()).toHaveBeenCalled();
  });
});
