import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
  CURRENT_PRODUCT_ERROR,
  CURRENT_PRODUCT_LOADING,
  CURRENT_PRODUCT_SUCCESS,
  FILTER_FOR_MEN,
  FILTER_FOR_WOMEN,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  products: [],
  currentProduct: {},
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        products: action.payload,
      };

    case CURRENT_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CURRENT_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case CURRENT_PRODUCT_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        currentProduct: action.payload,
      };
    case FILTER_FOR_MEN:
      return {
        ...state,
        products: action.payload,
      };

      // let updatedProducts = state.products.filter(
      //   (prod) => prod.gender === "MALE"
      // );
      // return {
      //   ...state,
      //   products: updatedProducts
      // }

    case FILTER_FOR_WOMEN:
      return {
        ...state,
        products: action.payload,
      };
      // let newProducts = state.products.filter((prod) => prod.gender === "FEMALE")
      // return {
      //   ...state,
      //   products: newProducts
      // }
    default:
      return state;
  }
};

export { productReducer };
