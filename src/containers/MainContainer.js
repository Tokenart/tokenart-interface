import React from "react";
import Card from "../components/Card/Card";
import { Heading, Flex } from "@chakra-ui/react";
import img_01 from "../assets/img_01.png";
import img_02 from "../assets/img_02.png";

export default function MainContainer() {
  const artDisplay = (
    <>
      <Card img={img_01} />
      <Card img={img_02} />
    </>
  );

  return (
    <Flex align="center" direction="column">
      <Heading m={10} align="center" fontSize="6xl">
        Market
      </Heading>
      <Flex wrap="wrap">{artDisplay}</Flex>
    </Flex>
  );
}
