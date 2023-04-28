import React from "react";
import { Flex, Spacer, Image, Text, Icon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/Group 12.png";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
  totalAmount,
} from "../Redux/Cart/action";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);

  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <Flex
      bg="#E1999F"
      borderBottom="0.25px solid #DEB3AD"
      p={5}
      align="center"
      justify="center"
    >
      <Link to="/">
        <Image src={logo} alt="bonkers corner" height={55}  />
      </Link>
      <Spacer />

      <Link to="/collection/all">
        <Button variant="ghost" color={"#663635"} _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}>
          SHOP
        </Button>
      </Link>

      <Spacer />
      <Link to="/collection/all">
        <Button variant="ghost" color={"#663635"} _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}>
          NEW ARRIVAL
        </Button>
      </Link>
      <Spacer />
      <Link to="/collection/all">
        <Button
          variant="ghost"
          color={"#663635"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          WOMEN
        </Button>
      </Link>
      <Spacer />
      <Link to="/collection/all">
        <Button variant="ghost" color={"#663635"} _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}>
          MEN
        </Button>
      </Link>
      <Spacer />
      <Link to="/collection/all">
        <Button variant="ghost" color={"#663635"} _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}>
          ABOUT
        </Button>
      </Link>
      <Spacer />
      <Link to="/collection/all">
        <Button variant="ghost" color={"#663635"} _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}>
          HELP
        </Button>
      </Link>
      <Spacer />

      <Button variant="ghost">
        <Icon as={FiSearch} boxSize="20px" />
      </Button>
      <Button variant="ghost">
        <Icon as={FaUser} boxSize="20px" />
      </Button>
      <Flex onClick={onOpen} ref={btnRef} cursor={"pointer"}>
        <Button variant="ghost">
          <Icon as={BsBagHeart} boxSize="20px" mx={1} />
          <Text>{cart ? cart.length : 0}</Text>
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
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
                            onClick={() => handelIncrease(item.id, item.size)}
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

      <Spacer />
    </Flex>
  );
};

export default Navbar;
