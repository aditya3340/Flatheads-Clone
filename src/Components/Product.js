import React, { useState } from "react";
import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, color, gender, original_price, final_price, images } =
    product;

  const [img, setImg] = useState(images[0]);

  const handleEnter = () => {
    setImg(images[1]);
  };

  const handleLeave = () => {
    setImg(images[0]);
  };
  const navigate = useNavigate();
  return (
    <Flex justify="center">
      <Box
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => navigate(`/collection/all/${id}`)}
      >
        <Image src={img} alt={name + "shoe"} />
        <Text>{name + " | " + color + " | " + gender}</Text>
        <HStack justify="center">
          <Text>{final_price}</Text>
          <Text as="s" color="gray">
            {original_price}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Product;
