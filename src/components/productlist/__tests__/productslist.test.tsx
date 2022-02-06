import { render, screen } from "@testing-library/react";
import ProductsList from "../index";
import { Provider } from "react-redux";
import { createStore } from "redux";
const mockStoreWithloading = {
    getProducts: {
    loading:true,
  },
};
const mockStoreWitherror = {
    getProducts: {
    error:'No Product List Available'
  },
};

const mockStoreWithproducts = {
    getProducts: {
    products: [ {
        id:1,
        title: "Blue Stripe Stoneware Plate",
        brand: "Kiriko",
        price: 40,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        image: "blue.jpg"
      }],
  },
};
describe("Product List Details Component", () => {
  it("render loading when page loads", () => {
    render(
        <Provider store={createStore(() => mockStoreWithloading )}>
            <ProductsList />
        </Provider>
      );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("render error ocuured when page loads", () => {
    render(
        <Provider store={createStore(() => mockStoreWitherror )}>
            <ProductsList />
        </Provider>
      );
    expect(screen.getByText(mockStoreWitherror.getProducts.error)).toBeInTheDocument();
  });

  it("render products list when page loads", () => {
    render(
        <Provider store={createStore(() => mockStoreWithproducts )}>
            <ProductsList />
        </Provider>
      );
    expect(screen.getByText(mockStoreWithproducts.getProducts.products[0].title)).toBeInTheDocument();
  });
});
