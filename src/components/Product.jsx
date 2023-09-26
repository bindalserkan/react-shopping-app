import React from "react";
import { useDispatch } from "react-redux";

import { setAddItemToCart, setOpenCart } from "../app/CartSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Flex,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Product({ id, title, image, price }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    const item = { id, title, image, price };

    dispatch(setAddItemToCart(item));
  }

  function handleCartToggle() {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  }

  return (
    <>
      <Card maxW="md">
        <CardBody>
          <Image
            boxSize="300px"
            objectFit="contain"
            src={image}
            alt={`image/${id}`}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" h="20" mb="20" align="center">{title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex m="auto">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                handleAddToCart();
                handleCartToggle();
              }}
            >
              Buy now
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleAddToCart()}
            >
              Add to cart
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
}
