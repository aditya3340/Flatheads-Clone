import { Button, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, handleFilterForMen, handleFilterForWomen } from '../Redux/Product/action'

const Filter = () => {

  const dispatch = useDispatch()
  let products = useSelector((state) => state.product.products)
  

  const allProducts = () => {
    dispatch(getData())
  }


  const handleFilter = () => {
    dispatch(handleFilterForMen(products))
    
  }
  const filterWomen  = () => {
    dispatch(handleFilterForWomen(products))
  }
  
  return (
    <div>
      <Button onClick={allProducts}>ALL COLLECTION</Button>
      <Button colorScheme='yellow' m={"2"} onClick={handleFilter}>FILTER FOR MEN</Button>
      <Button onClick={filterWomen}>FILTER FOR WOMEN</Button>
    </div>
  )
}

export default Filter