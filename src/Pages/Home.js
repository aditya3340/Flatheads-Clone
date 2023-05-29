import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Box,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import Men from "../assets/men.png";
import Women from "../assets/women.png";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/Product/action";
import NewProduct from "../Components/NewProduct";
import { useEffect } from "react";
import { VscDebugBreakpointLog, VscTwitter } from "react-icons/vsc";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const special = [
  {
    text: "Innovative Materials",
  },
  {
    text: "Smart Design",
  },
  {
    text: "Supreme Comfort",
  },
  {
    text: "Ultra-lightweight",
  },
  {
    text: "Environmentally Relevant",
  },
];

const Home = () => {
  const containerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    
  };

  const textContainerStyle = {
    position: "absolute",
    padding: "40px",

    color: "#fff",
  };

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);

  const displayProducts = products.slice(4, 7);

  return (
    <div>
      <Box style={containerStyle} >
        <video src={video} muted autoPlay preload="auto" loop></video>
        <div style={textContainerStyle}>
          <Heading color={"gray.400"} fontFamily={"poppins"}>
            STEPPING INTO THE SUMMER
          </Heading>
          <Text p={2} fontFamily={"poppins"}>
            New platfrom styles for the season
          </Text>
          <Link to="./collection/all">
            <Button
              bgColor={"black"}
              color={"white"}
              _hover={{
                transform: "translateX(10px)",
                boxShadow: "lg",
              }}
              fontFamily={"poppins"}
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </Box>
      <Box bgColor={"#ede734"}>
        <Flex justify={"center"} p={10} align={"center"}>
          <SimpleGrid columns={[1, 2]}>
            <Text fontSize={"3xl"} fontWeight={"bold"} mr={10}>
              JOIN Flatheads AND GET 15% OFF
            </Text>
            <Box>
              <Button
                bgColor={"black"}
                color={"white"}
                borderRadius={"0"}
                _hover={{ boxShadow: "dark-lg" }}
              >
                SIGN UP NOW
                <ArrowRightIcon ml={3} />
              </Button>
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
      <Heading textAlign={"center"} mt={10}>
        NEW ARRIVALS
      </Heading>
      <Flex justify={"center"}>
        {loading ? (
          <h2>Products are loading...</h2>
        ) : error ? (
          <h2>Something went wrong... please try again later</h2>
        ) : (
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {displayProducts.map((product) => {
              return <NewProduct product={product} key={product.id} />;
            })}
          </SimpleGrid>
        )}
      </Flex>
      <Flex justifyContent={"space-around"}>
        <Card maxWidth={"40%"}>
          <Link to="/collection/all">
            <CardBody>
              <Image src={Men} alt="men" borderRadius="lg"></Image>
            </CardBody>
          </Link>
          <Divider></Divider>
          <CardFooter>
            <Heading>MEN</Heading>
          </CardFooter>
        </Card>
        <Card maxWidth={"40%"}>
          <Link to="./collection/all">
            <CardBody>
              <Image src={Women} alt="men" borderRadius="lg"></Image>
            </CardBody>
          </Link>
          <Divider></Divider>
          <CardFooter>
            <Heading>WOMEN</Heading>
          </CardFooter>
        </Card>
      </Flex>
      <Heading textAlign={"center"} mt={10} mb={5}>
        WHY FLATHEADS ?{" "}
      </Heading>
      <Box maxW={"80%"} margin={"auto"}>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <VStack color={"gray.600"} p={5} justify={"space-between"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Brand Story
            </Text>
            <Text textAlign={"center"}>
              Flatheads make shoes for the new generation. We are
              revolutionizing casual footwear through innovative materials and
              thoughtful design that is relevant to your lifestyle. Our shoes
              are made with natural materials like bamboo and banana fibre,
              optimized to offer you comfort that lasts all through the day.,
              and more! From meetings to meet-ups, our shoes are crafted to fit
              every aesthetic.
            </Text>
            <Button colorScheme="yellow">LEARN MORE</Button>
          </VStack>
          <VStack
            justify={"space-between"}
            p={5}
            align={"center"}
            color={"gray.600"}
            textAlign={"center"}
          >
            <Text fontSize={"xl"} fontWeight={"bold"}>
              What's Special About Flatheads
            </Text>
            <SimpleGrid columns={[1, 2]} gap={6}>
              {special.map((item) => {
                return (
                  <Flex align={"center"} gap={2}>
                    <VscDebugBreakpointLog />
                    <Text>{item.text}</Text>
                  </Flex>
                );
              })}
            </SimpleGrid>
            <Button colorScheme="yellow">LEARN MORE</Button>
          </VStack>
        </SimpleGrid>
      </Box>
      <Box maxW={"90%"} margin={"auto"} p={10}>
        <Flex align={"center"} justify={"space-between"}>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            cursor={"pointer"}
            _hover={{ color: "gray" }}
          >
            CONTACT US
          </Text>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            fontWeight={"bold"}
          >
            |
          </Text>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            cursor={"pointer"}
            _hover={{ color: "gray" }}
          >
            HELP
          </Text>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            fontWeight={"bold"}
          >
            |
          </Text>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            cursor={"pointer"}
            _hover={{ color: "gray" }}
          >
            FOOTER SHOP
          </Text>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            fontWeight={"bold"}
          >
            |
          </Text>
          <Text
            fontSize={{ base: "15px", md: "xl", lg: "3xl" }}
            cursor={"pointer"}
            _hover={{ color: "gray" }}
          >
            ABOUT
          </Text>
        </Flex>
      </Box>
      <Box
        borderTop={"1px solid black"}
        maxW={"90%"}
        margin={"auto"}
        p={10}
        mt={20}
      >
        <Flex justify={"space-between"} align={"center"}>
          <Text fontWeight={"bold"}> © 2023 Flatheads</Text>
          <Flex gap={5}>
            <VscTwitter cursor={"pointer"} size={30} />
            <AiFillInstagram cursor={"pointer"} size={30} />
            <AiFillFacebook cursor={"pointer"} size={30} />
            <AiFillYoutube cursor={"pointer"} size={30} />
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
