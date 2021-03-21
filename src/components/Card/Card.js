import React from "react";
import { Box, Image } from "@chakra-ui/react";
// Assets

export default function Card({ img }) {
  return (
    <Box
      boxShadow="0 0.125rem 0 rgb(65 61 69 / 20%)"
      padding="1rem"
      borderRadius="0.2rem"
      h="30rem"
      w="25rem"
      m="1rem"
      background="white"
      border="1.5px solid grey"
    >
      <Image objectFit="cover" h="100%" w="100%" src={img} />
      <Box h="10rem" w="20rem"></Box>
    </Box>
  );
}
