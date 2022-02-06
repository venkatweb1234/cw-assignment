import { render, screen } from "@testing-library/react";
import Checkout from "..";

describe("Checkout Details Component", () => {
  beforeEach(() => {
    render(<Checkout />);
  });
  it("render navigtion checkout page correctly", () => {
    expect(screen.getByText('Checkout Page')).toBeInTheDocument();
  });
});