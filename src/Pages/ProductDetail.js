import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProductData } from "../Redux/Product/action";
import { Text, Flex, Box, HStack, Button, SimpleGrid, Heading } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { addToCart } from "../Redux/Cart/action";
import CurrentProduct from "../Components/CurrentProduct";

const ProductDetail = () => {
  const currentProduct = useSelector((state) => state.product.currentProduct);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [size, setSize] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentProductData(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }
  if (Object.keys(currentProduct).length === 0) {
    return <h1>Product {id} not found</h1>;
  }

  const handleCart = () => {
    let payload = {
      ...currentProduct,
      size,
    };

    dispatch(addToCart(payload));
  };

  return (
    <Flex justifyContent={"center"} p = {4}>
    <SimpleGrid columns={[1, null, 2]} gap={10}>
      {/* <NewProduct product={currentProduct} /> */}
      <CurrentProduct product={currentProduct} />
      <Flex justify={"center"} align={"center"}>
      <Box>
        <Heading >{currentProduct.name} | {currentProduct.color}</Heading>
        <HStack justify={"space-between"}>
        <Text fontSize={"md"} >{currentProduct.gender}</Text>
        <HStack>
        <Text fontSize={"md"}  textDecoration={"line-through"} color={"gray.600"}>{currentProduct.original_price}</Text>
        <Text fontSize={"md"} fontFamily={"poppins"} >{currentProduct.final_price}</Text>
        </HStack>
        </HStack>
        <Text mt={5}>Choose a Size: </Text>
        <HStack >
          {currentProduct?.sizes.map((size) => {
            return (
              <Button key={size} cursor="pointer" onClick={() => setSize(size)}>
                {size}
              </Button>
            );
          })}
        </HStack>
        <Button bg="yellow" m={4} p={6} disabled={!size} onClick={handleCart}>
          {!size ? "PLEASE SELECT A SIZE" : "ADD TO CART"}
        </Button>
      </Box>
      </Flex>
    </SimpleGrid>
    </Flex>
    
  );
};

export default ProductDetail;
