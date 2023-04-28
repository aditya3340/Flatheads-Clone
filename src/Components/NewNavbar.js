import React from "react";
import logo from "../assets/Group 12.png";
import { BsBagHeart } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../Redux/Cart/action";

const Links = ["SHOP", "NEW ARRIVAL", "WOMEN", "MEN", "ABOUT", "HELP"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={"/collection/all"}
  >
    {children}
  </Link>
);

const NewNavbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const {
    isOpen: navIsOpen,
    onOpen: navOnOpen,
    onClose: navOnClose,
  } = useDisclosure();
  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose,
  } = useDisclosure();

  const btnRef = React.useRef();
  const dispatch = useDispatch();

  const handleDecrease = (id, size, qty) => {
    if (qty > 1) {
      dispatch(decreaseQty({ id, size, qty }));
    } else {
      dispatch(removeFromCart({ id, size }));
    }
  };
  const handelIncrease = (id, size) => {
    dispatch(increaseQty({ id, size }));
  };
  const covertToNumber = (str) => {
    if (Number(str)) {
      return Number(str);
    }
    //1,999 => 1999
    let arr = str.includes(",") ? str.split(",") : [];
    let final_str = arr.reduce((a, c) => a + c, "");
    let result = Number(final_str);
    return result;
  };

  let total_orginal_price = 0;
  let total_final_price = 0;

  cart.forEach((prod) => {
    total_orginal_price += covertToNumber(prod.original_price) * prod.qty;
    total_final_price += covertToNumber(prod.final_price) * prod.qty;
  });

  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={navIsOpen ? navOnClose : navOnOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to={"/"}>
                <Image src={logo} alt="logo" h={45}></Image>
              </Link>
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Flex onClick={drawerOnOpen} ref={btnRef} cursor={"pointer"}>
              <Button variant="ghost">
                <Icon as={BsBagHeart} boxSize="20px" mx={1} />
                <Text>{cart ? cart.length : 0}</Text>
              </Button>
            </Flex>
          </Flex>
          <Drawer
            isOpen={drawerIsOpen}
            placement="right"
            onClose={drawerOnClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>YOUR CART ({cart.length})</DrawerHeader>

              <DrawerBody>
                {cart.length > 0
                  ? cart.map((item) => {
                      return (
                        <Flex key={item.id}>
                          <Image
                            src={item.images[0]}
                            alt="item_img"
                            boxSize={"75px"}
                          />
                          <Box>
                            <Text casing="lowercase">{`${item.name} | ${item.color} | ${item.gender}`}</Text>
                            <Text as="sup">{item.size}</Text>
                            <Flex align="center">
                              <Button
                                disabled={item.qty === 0}
                                onClick={() =>
                                  handleDecrease(item.id, item.size, item.qty)
                                }
                              >
                                -
                              </Button>
                              <Text>{item.qty}</Text>
                              <Button
                                onClick={() =>
                                  handelIncrease(item.id, item.size)
                                }
                              >
                                +
                              </Button>
                            </Flex>
                            <Flex>
                              <Text as="s">$ {item.original_price}</Text>

                              <Text> $ {item.final_price}</Text>
                            </Flex>
                          </Box>
                        </Flex>
                      );
                    })
                  : "Buy something <3"}
              </DrawerBody>
              <Flex justify="space-between" m="2" align="center">
                <Text>SUBTOTAL</Text>
                <Flex p={2}>
                  <Text p={2} as={"s"}>
                    {" "}
                    $ {total_orginal_price}
                  </Text>
                  <Text p={2}> $ {total_final_price}</Text>
                </Flex>
              </Flex>

              <DrawerFooter>
                <Button colorScheme="red">PROCEED TO CHECKOUT</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>

        {navIsOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default NewNavbar;
