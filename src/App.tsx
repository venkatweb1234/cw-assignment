import "./App.css";
import CategoryNav from "./components/categoryNav";
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
function App() {
  return (
      <div className="container fluid" data-testid='containerfluid'>
         <Provider store={store}>
         <CategoryNav />
         </Provider>
      </div>
  );
}

export default App;
