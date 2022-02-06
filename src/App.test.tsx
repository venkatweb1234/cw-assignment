import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { store } from './components/redux/store';
const mockStore = {
  getProducts: [],
};
jest.mock("react-router-dom", () => ({
  Router: () => <div>Home</div>,
}));
describe("App Component", () => {
  it("Should render Provider with store component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId('containerfluid')).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument();
    
  });

  it('render Container', () =>{
   const container = render(
    <Provider store={createStore(() => mockStore)}>
      <App />
    </Provider>
  );
  expect(container).toBeInTheDocument()

  })
});

