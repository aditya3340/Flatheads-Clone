import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import Filter from "../Components/Filter";

import NewProduct from "../Components/NewProduct"


const ShopPage = () => {

  const products = useSelector((state) => state.product.products)
  const loading = useSelector((state) => state.product.loading)
  const error = useSelector((state) => state.product.error)

  
  const dispatch = useDispatch()

  useEffect(() => {
    if(products?.length === 0) {
      dispatch(getData())
    }
  }, [dispatch, products.length]);

 
  return (
    <div> 
      <Filter/>
      <Flex justify="center">
      {
        loading ? 
        <h2>Products are loading...</h2>
        : error ? <h2>Something went wrong... please try again later</h2>
        :
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {products.length > 0 && products.map((product) => {
              return <NewProduct product = {product} key={product.id}/>
            }) } 
          </SimpleGrid>
      }
      </Flex>

    </div>
  );
};

export default ShopPage;
