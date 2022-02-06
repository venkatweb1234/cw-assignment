# Redux
 The redux whicj=h helps to store the state top level compoent in our application! that state we can where ever you want!

 # Redux creates the action Types

CART TYPES:
ADD_TO_CART 
REMOVE_TO_CART
CART_RESET 

PRODUCT TPES:
GET_PRODUCTS_REQUEST
GET_PRODUCTS_SUCCESS
GET_PRODUCTS_FAILURE

GET_PRODUCT_DETAILS_REQUEST
GET_PRODUCT_DETAILS_SUCCESS
GET_PRODUCT_DETAILS_FAILURE
GET_PRODUCT_DETAILS_RESET

# Redux helps to create the action creators

Cart actions:
addToCart
removeToCart

Product actions:
getProducts
getProductDetails
removeProductDetails

# Root Reducer:

rootReducer which helps to combineReducers

# Store

The store create the Store and hold the rootReducer and applymiddleware with Thunk.

# Finally added store under App compoent

It is using the react-redux

```js
<Provider store= {store}>
</Provider>
```