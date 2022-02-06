#Product Item Compoent

Short description of Product Item component

Used React Hooks:
useNavigate
useCallback

React-router Hook:
useNavigate

Redux hooks:
useDispatch

Extra 3rd library:
loadash
# Example usage

```js
  <ProductItem>
   <div className="view_cart_details">
                  <button role='button' className="view_details" onClick={() =>gotoProductDetails(item)}>
                    VIEW DETAILS
                  </button>
                </div>
                <div className="add_cart_details">
                  <button role='button' className="add_to_cart" onClick={() => gotoMyCart(item)}>
                    ADD TO CART
                  </button>
                </div>
  </ProductItem>
```

# Description

Include longer description of `ProductItem` here. Include things like any
greater context that this component would be used in (e.g. is it a parent
container or child component, Is it used on certain pages like ProductItem pages or is there some other sort of usage).

Step1 : ProductItem page which helps to display the overlay image for View Product and Product details buttons which helps to add the cart whenever customer clicks the buttons.


# Nav component

It helps to give access to customer add the cart!
