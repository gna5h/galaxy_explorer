import React from "react";
import {
  Heading,
  Input,
  InputGroup,
  VStack,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

export default function Filter() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FaFilter color="white" />}
        bgColor={"transparent"}
        _hover={{
          backgroundColor: "transparent",
          color: "primary.yellow",
        }}
        variant="ghost"
      />
      <MenuList minWidth="240px">
        <MenuOptionGroup title="Gender" type="radio">
          <MenuItemOption value="male">Male</MenuItemOption>
          <MenuItemOption value="female">Female</MenuItemOption>
          <MenuItemOption value="n/a">N/A</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title="Homeworld" type="checkbox">
          <MenuItemOption value="email">Email</MenuItemOption>
          <MenuItemOption value="phone">Phone</MenuItemOption>
          <MenuItemOption value="country">Country</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
