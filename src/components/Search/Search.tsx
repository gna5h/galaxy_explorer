import {
  Stack,
  Box,
  Heading,
  Input,
  IconButton,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

export default function Search() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"primary.yellow"}
      height={"10vh"}
      width={"100%"}
      paddingX={isSmallScreen ? "50" : "75"}
    >
      <Heading size={"lg"}>Galaxy Explorer</Heading>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={isSmallScreen ? 5 : 10}
      >
        {isSmallScreen ? (
          <IconButton
            aria-label="Search"
            icon={
              <Search2Icon color="primary.black" _hover={{ color: "white" }} />
            }
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
          />
        ) : (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="primary.black" />
            </InputLeftElement>
            <Input
              placeholder="Quick Search"
              _placeholder={{ color: "primary.black" }}
              focusBorderColor="white"
              _hover={{ borderColor: "white" }}
              borderRadius={100}
              borderColor={"primary.black"}
              size="md"
            />
          </InputGroup>
        )}
        <IconButton
          aria-label="Filter"
          icon={
            <HamburgerIcon
              color="primary.black"
              boxSize={6}
              _hover={{ color: "white" }}
            />
          }
          variant="ghost"
          _hover={{ backgroundColor: "transparent" }}
        />
      </Stack>
    </Stack>
  );
}
