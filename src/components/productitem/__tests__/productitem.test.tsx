import { fireEvent, render, screen } from "@testing-library/react";
import ProductItem, { props } from "..";
import { Provider } from "react-redux";
import { createStore } from "redux";
const emptyMockStore = {};
const mockProps: props = {
  item: {
    id: "1",
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "blue.jpg",
  },
};
// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();
const mockedUseDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-redux", () => ({
  ...(jest.requireActual("react-redux") as any),
  useDispatch: () => mockedUseDispatch,
}));
describe("ProductItem Component", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => emptyMockStore)}>
        <ProductItem {...mockProps} />
      </Provider>
    );
  });
  it("render product images display correctly", () => {
    expect(screen.getByAltText("Card image cap")).toBeInTheDocument();
  });

  it("render product brand text display correctly", () => {
    expect(screen.getByText(mockProps.item.brand)).toBeInTheDocument();
  });
  it("render product title text display correctly", () => {
    expect(screen.getByText(mockProps.item.title)).toBeInTheDocument();
  });
  it("render product price display correctly", () => {
    expect(
      screen.getByText(`$${mockProps.item.price.toFixed(2)}`)
    ).toBeInTheDocument();
  });
  it("render overlay div do on the image when user do mouseover on the image tile", () => {
    const imageTile = screen.getByAltText("Card image cap");
    fireEvent.mouseOver(imageTile);
    expect(screen.getByAltText("overlay card image cap")).toBeInTheDocument();
    expect(screen.getByText("VIEW DETAILS")).toBeInTheDocument();
    expect(screen.getByText("ADD TO CART")).toBeInTheDocument();
  });

  it("should navigate product details page", () => {
    const imageTile = screen.getByAltText("Card image cap");
    fireEvent.mouseOver(imageTile);
    expect(screen.getByText("VIEW DETAILS")).toBeInTheDocument();
    const viewDetails = screen.getByText("VIEW DETAILS");
    fireEvent.click(viewDetails);
    mockedUsedNavigate(`/productDetails/1`);
    expect(screen.getByText("ADD TO CART")).toBeInTheDocument();
    const addcartDetails = screen.getByText("ADD TO CART");
    fireEvent.click(addcartDetails);
    mockedUsedNavigate(`/cart`);
  });
});
