import { render, screen } from "@testing-library/react";
import Journal from "..";

describe("Journal Details Component", () => {
   
  it("should render Journal compoent", () => {
    render(<Journal />);
    expect(screen.getByText('Journal Page')).toBeInTheDocument();
  });
});