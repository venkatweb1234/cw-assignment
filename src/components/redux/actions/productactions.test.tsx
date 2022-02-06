import axios from "axios";
import { getProductDetails, getProducts, removeProductDetails } from "../actions/productActions";
import * as actionTypes from "../actionTypes/productTypes";
import axiosMock from "../../__mocks__/mockaxios";
import { cleanup, render } from "@testing-library/react";

 const mockDispatch = jest.fn();
var mockGet=jest.fn()
jest.mock('axios', () => ({
    __esModule: true,
    ...(jest.requireActual("axios") as any),
    get:mockGet
    
}));
// jest.mock("axios", () => ({
//     ...(jest.requireActual("axios") as any),
//     get: mockGet
//   }));

// // export const axios= {
// //     post: jest.fn().mockResolvedValue({ data: {} }),
// //     get: jest.fn().mockResolvedValue({ data: {} }),
// //     // getAgain: jest.fn().mockResolvedValue({ data: {} }), // nope
// // };
// const mockProductItems = [
//     {
//       id: "1",
//       title: "Blue Stripe Stoneware Plate",
//       brand: "Kiriko",
//       price: 40,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
//       image: "blue.jpg",
//     },
//     {
//       id: "2",
//       title: "Hand Painted Blue Flat Dish",
//       brand: "Kiriko2",
//       price: 28,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
//       image: "hand-painted.jpg",
//     },
//   ];
// describe("product action", () => {
// //   beforeEach(() => {
// //     moxios.install();
// //    // moxios.stubRequest(``,{})
// //   });

// //   afterEach(() => {
// //     moxios.uninstall();
// //   });

//   it("GET Products", async() => {
//     mockGet.mockReturnValueOnce(mockProductItems);
//     getProducts()(mockDispatch);
//     expect(mockDispatch).toHaveBeenCalledWith({
//       type:actionTypes.GET_PRODUCTS_REQUEST,
//     });
//     // moxios.wait(() => {
//     //   const request = moxios.requests.mostRecent();
//     //   request
//     //     .respondWith({
//     //       status: 200,
//     //       response: mockProductItems,
//     //     })
//     //     .then(function () {
//     //      expect(mockDispatch).toHaveBeenCalledWith({
//     //         type: actionTypes.GET_PRODUCTS_SUCCESS,
//     //         payload: mockProductItems[0],
//     //       }); 
//     //     })
//     //     ;
//     // });
//     // expect(mockDispatch).toHaveBeenCalledWith({
//     //     type:actionTypes.GET_PRODUCTS_FAILURE,
//     //     payload:'Error Message'
//     //   });
//    // const mockedAxios = axios as jest.Mocked<typeof axios>;
// //    let mock = new MockAd(axios);
// //     let data1:object = {}
    
//     //const getProducts1 = axios.get.mockReturnValueOnce(mockProductItems);
    
//     // const data = await getProducts1();
//     // expect(axios.get).toHaveBeenCalled();
//     // expect(mockDispatch).toHaveBeenCalledWith({
//     //             type: actionTypes.GET_PRODUCTS_SUCCESS,
//     //             payload: mockProductItems[0],
//     //           }); 

//     expect(mockGet).toHaveBeenCalledWith('http://localhost:3001/products')
// });

// //   it("GET Product details", async() => {
// //     const expectedState1 = {
// //       id: "1",
// //       title: "Blue Stripe Stoneware Plate",
// //       brand: "Kiriko",
// //       price: 40,
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
// //       image: "blue.jpg",
// //     };
// //     getProducts()(mockDispatch);
// //     expect(mockDispatch).toHaveBeenCalledWith({
// //       type:actionTypes.GET_PRODUCT_DETAILS_REQUEST,
// //     });
// //     moxios.wait(() => {
// //       const request = moxios.requests.mostRecent();
// //       request
// //         .respondWith({
// //           status: 200,
// //           response: expectedState1,
// //         })
// //         .then(function () {
// //           expect(mockDispatch).toHaveBeenCalledWith({
// //             type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
// //             payload: mockProductItems[0],
// //           });
// //         });
// //     });
// //     expect(mockDispatch).toHaveBeenCalledWith({
// //         type:actionTypes.GET_PRODUCT_DETAILS_FAILURE,
// //         payload:'Error Message'
// //       });
// //   });
 
// });

const mockProductItems = [
    {
      id: "1",
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "blue.jpg",
    },
    {
      id: "2",
      title: "Hand Painted Blue Flat Dish",
      brand: "Kiriko2",
      price: 28,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
      image: "hand-painted.jpg",
    },
  ];
describe('Get Products',() =>{
    afterEach(cleanup)
    it("fetches and displays data", async () => {
        // We'll be explicit about what data Axios is to return when `get` is called.
        mockGet.mockResolvedValueOnce({ data:  mockProductItems  });
        getProducts()(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith({
              type:actionTypes.GET_PRODUCTS_REQUEST,
            });
      // let url ='http://localhost:3001/products';
      expect(mockDispatch).toHaveBeenCalledWith({
                    type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
                    payload: mockProductItems,
                  });
     
      });
})