import { fireEvent, render, screen } from "@testing-library/react";
import ProductDetails from "..";
import { Provider } from "react-redux";
import { createStore } from "redux";
import _ from "lodash";

const mockStoreWithproduct = {
  getProductDetails: {
    product: {
      id: 1,
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "blue.jpg",
    },
  },
};

const mockStoreWithEmptyProduct = {
  getProductDetails: {
    product: {},
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

describe("Productdetails Component with mock product", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockStoreWithproduct)}>
        <ProductDetails />
      </Provider>
    );
  });

  it("render product details title display correctly", () => {
    expect(
      screen.getByText(mockStoreWithproduct.getProductDetails.product.title)
    ).toBeInTheDocument();
  });
  it("render product details brand display correctly", () => {
    expect(
      screen.getByText(mockStoreWithproduct.getProductDetails.product.brand)
    ).toBeInTheDocument();
  });
  it("render product details price display correctly", () => {
    expect(
      screen.getByText(
        `$${mockStoreWithproduct.getProductDetails.product.price.toFixed(2)}`
      )
    ).toBeInTheDocument();
  });
  it("render product details description display correctly", () => {
    expect(
      screen.getByText(
        mockStoreWithproduct.getProductDetails.product.description
      )
    ).toBeInTheDocument();
  });
  it("render product details description display correctly", () => {
    expect(
      screen.getByText(
        mockStoreWithproduct.getProductDetails.product.description
      )
    ).toBeInTheDocument();
  });
  it("render product details image display correctly", () => {
    expect(screen.getByAltText("imageHomePage")).toBeInTheDocument();
  });
  it("should navigate to home page when user clicks on Home menu", () => {
    const homeLink = screen.getByText("HOME/");
    fireEvent.click(homeLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
  it("should navigate to home page when user clicks on PLATES menu", () => {
    const platesLink = screen.getByText("PLATES/");
    fireEvent.click(platesLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
  it("render text field display correctly", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveTextContent("1");
  });
  it("Should navigate cart page when user clicks on add to cart button", () => {
    const add_to_cart = screen.getByText("ADD TO CART");
    fireEvent.click(add_to_cart);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseDispatch).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/cart");
  });
  it("Should increase product quantity when user clicks on plus button", () => {
    const plus_button = screen.getByText("+");
    expect(plus_button).toBeInTheDocument();
    fireEvent.click(plus_button);
    expect(screen.getByRole("textbox")).toHaveTextContent("2");
    fireEvent.click(plus_button);
    expect(screen.getByRole("textbox")).toHaveTextContent("3");
  });
  it("Should decrease product quantity when user clicks on minus button", () => {
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
});

describe("Productdetails Component without mock product", () => {
  it("loads the empty product", () => {
    render(
      <Provider store={createStore(() => mockStoreWithEmptyProduct)}>
        <ProductDetails />
      </Provider>
    );
    expect(screen.queryByText('textBox')).toBeNull();
  });
});
