import { rootreducers } from './rootReducer';
import { createStore } from 'redux';

describe('Root Reducer Suite', () => {

  let store = createStore(rootreducers)

  test('loaded correctly', () => {
    expect(store.getState().cart).toEqual({ cartItems:[] });
    expect(store.getState().getProducts).toEqual( { products: [] });
    expect(store.getState().getProductDetails).toEqual({ product: {} });
  });
});