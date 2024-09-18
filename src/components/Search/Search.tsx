import {
  Stack,
  Heading,
  Input,
  IconButton,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Collapse,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/store.ts";
import { searchPeople } from "../../store/thunks/people_thunk.ts";

export default function Search({
  isSmallScreen,
}: {
  isSmallScreen: boolean | undefined;
}) {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleSearch = () => {
    dispatch(searchPeople(keyword));
  };

  return (
    <VStack
      alignItems={"center"}
      bg={"primary.yellow"}
      width={"100%"}
      paddingX={isSmallScreen ? 0 : 50}
      paddingY={isSmallScreen ? 5 : 0}
    >
      <HStack
        height={isSmallScreen ? "5vh" : "10vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={5}
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
                <Search2Icon
                  color="primary.black"
                  _hover={{ color: "white" }}
                />
              }
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              onClick={onToggle}
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
                onChange={(event) => setKeyword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
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
      </HStack>
      {isSmallScreen && (
        <Collapse in={isOpen} animateOpacity>
          <HStack height={"5vh"} width={"90vw"} margin={1}>
            <Input
              placeholder="Quick Search"
              _placeholder={{ color: "primary.black" }}
              focusBorderColor="white"
              _hover={{ borderColor: "white" }}
              borderRadius={100}
              borderColor={"primary.black"}
              size="md"
              onChange={(event) => setKeyword(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </HStack>
        </Collapse>
      )}
    </VStack>
  );
}
