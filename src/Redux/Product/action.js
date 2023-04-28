import {
    PRODUCT_ERROR,
    PRODUCT_LOADING,
    PRODUCT_SUCCESS,
    CURRENT_PRODUCT_ERROR,
    CURRENT_PRODUCT_LOADING,
    CURRENT_PRODUCT_SUCCESS,
    FILTER_FOR_MEN,
    FILTER_FOR_WOMEN,
  } from "./actionTypes"


const handleSuccess = (payload) => ({
    type: PRODUCT_SUCCESS,
    payload,
})

const handleLoading = () => ({
    type: PRODUCT_LOADING
})

const handleError = () => ({
    type: PRODUCT_ERROR
})
const handleFilterForMen = (payload) => ({
    type: FILTER_FOR_MEN,
    // payload,
    payload: payload.filter((prod)=> prod.gender === "MEN"),
})
const handleFilterForWomen = (payload) => ({
    type: FILTER_FOR_WOMEN,
    // payload,
    payload: payload.filter((prod) => prod.gender === "WOMEN")
})

//thunk
const getData = () => (dispatch) => {
    dispatch(handleLoading())
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((res) => dispatch(handleSuccess(res)))
      .catch(() => dispatch(handleError()))
}


//for current product
const handleCurrentProductLoading = () => ({
    type: CURRENT_PRODUCT_LOADING
})

const handleCurrentProductError = () => ({
    type: CURRENT_PRODUCT_ERROR
})

const handleCurrentProductSuccess = (payload) => ({
    type: CURRENT_PRODUCT_SUCCESS,
    payload,
})



//current Product thunk
const getCurrentProductData = (id) => (dispatch) => {
    dispatch(handleCurrentProductLoading())
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => res.json())
      .then((res) => dispatch(handleCurrentProductSuccess(res)))
      .catch(() => dispatch(handleCurrentProductError()))
}

export { getData, getCurrentProductData, handleFilterForMen, handleFilterForWomen}