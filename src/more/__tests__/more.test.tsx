import { render, screen } from "@testing-library/react";
import More from "..";

describe("More Details Component", () => {
  beforeEach(() => {
    render(<More />);
  });
  it("render navigtion more page correctly", () => {
    expect(screen.getByText('More Details page')).toBeInTheDocument();
  });
});
