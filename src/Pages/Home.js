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
  
} from "@chakra-ui/react";
import { ArrowRightIcon } from '@chakra-ui/icons'
import React from "react";
import Men from "../assets/men.png";
import Women from "../assets/women.png";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";

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

  return (
    <div>
      <div style={containerStyle}>
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
      </div>
      <Box bgColor={"#ede734"}>
        <Flex justify={"center"} p = {10} align={"center"}>
        <Text fontSize={"3xl"} fontWeight={"bold"} mr = {10}>JOIN Flatheads AND GET 15% OFF</Text>
        <Button  bgColor={"black"} color={"white"} borderRadius={"0"} _hover={{boxShadow:"dark-lg"}} pr= {10} pl={10} >
          SIGN UP NOW
          <ArrowRightIcon ml={3}/>
        </Button>
        </Flex>
      </Box>
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
    </div>
  );
};

export default Home;
