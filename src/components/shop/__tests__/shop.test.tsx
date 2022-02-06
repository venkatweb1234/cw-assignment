import { render, screen } from "@testing-library/react";
import Shop from "..";

describe("Shop Page Component", () => {
  beforeEach(() => {
    render(<Shop />);
  });
  it("render navigtion shop page correctly", () => {
    expect(screen.getByText('SHOP PAGE')).toBeInTheDocument();
  });
});
