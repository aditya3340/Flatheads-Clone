import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function ProductSimple({ product }) {
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
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        onClick={() => navigate(`/collection/all/${id}`)}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={img}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {name + " | " + color}
          </Text>
          <Heading fontSize={"2xl"} fontWeight={500}>
            {gender}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text  fontSize={"xl"} color={"red"}>
              ${final_price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ${original_price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
