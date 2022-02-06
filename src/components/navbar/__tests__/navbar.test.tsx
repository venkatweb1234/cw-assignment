import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "..";
import { BrowserRouter } from "react-router-dom";
// pay attention to write it at the top level of your file
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });
  it("render logo and Menu Headers correctly", () => {
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("SHOP")).toBeInTheDocument();
    expect(screen.getByText("JOURNAL")).toBeInTheDocument();
    expect(screen.getByText("MORE")).toBeInTheDocument();
    expect(screen.getByText("MY CART(0)")).toBeInTheDocument();
  });
  it("should navigate to home page when user clicks on Home menu", () => {
    const homeLink = screen.getByText("HOME");
    fireEvent.click(homeLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
  it("should navigate to shop page when user clicks on SHOP menu", () => {
    const shopLink = screen.getByText("SHOP");
    fireEvent.click(shopLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/shop");
  });
  it("should navigate to journal page when user clicks on JOURNAL menu", () => {
    const journalLink = screen.getByText("JOURNAL");
    fireEvent.click(journalLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/journal");
  });
  it("should navigate to more page when user clicks on MORE menu", () => {
    const moreLink = screen.getByText("MORE");
    fireEvent.click(moreLink);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/more");
  });
});
