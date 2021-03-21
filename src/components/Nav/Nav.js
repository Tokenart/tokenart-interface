import React from "react";
import icon from "../../assets/eth-icon.png";
import {
  Link,
  Image,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("grey.800", "white");

  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px solid grey"
    >
      <Image ml={5} src={icon} alt="Logo" />
      <Flex mr={10} align="center">
        <Link mr={7} color={color}>
          Market
        </Link>
        <Button mr={7} onClick={toggleColorMode}>
          <MoonIcon />
        </Button>
        <Button>Connect Wallet</Button>
      </Flex>
    </Flex>
  );
}
