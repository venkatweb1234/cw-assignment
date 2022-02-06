#ProductsList Compoent

Short description of ProductsList component
Used React Hooks:
useEffect

Redux hooks:
useDispatch
useSelector

# Example usage

```js
  <ProductsList>
   <StyledRow className="row">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((item: Product) => (
              <div className="col-lg-4">
                <ProductItem item={item} key={item.id}/>
              </div>
            ))
          )}
        </StyledRow>
  </ProductsList>
```

# Description

Include longer description of `ProductsList` here. Include things like any
greater context that this component would be used in (e.g. is it a parent
container or child component, Is it used on certain pages like ProductsList pages or is there some other sort of usage).

Step1 : ProductsList is the main page which helps to load the all product items and push those to productItem compoents to make the page proper way!


# Nav component

It helps to pull all data from async call!
