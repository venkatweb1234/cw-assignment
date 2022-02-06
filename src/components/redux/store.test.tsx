import {store} from './store'

describe('Root Reducer Suite', () => {

  
    test('loaded correctly', () => {
        expect(store.getState().cart).toEqual({ cartItems:[] });
        expect(store.getState().getProducts).toEqual( { products: [] });
        expect(store.getState().getProductDetails).toEqual({ product: {} });
      });
    });
