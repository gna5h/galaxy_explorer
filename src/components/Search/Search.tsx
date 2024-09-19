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
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
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
          gap={5}
        >
          {isSmallScreen ? (
            <IconButton
              aria-label="Search"
              icon={<FaSearch color="primary.black" />}
              variant="ghost"
              _hover={{ backgroundColor: "transparent", color: "white" }}
              onClick={onToggle}
            />
          ) : (
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaSearch color="primary.black" />
              </InputLeftElement>
              <Input
                placeholder="Quick Search"
                _placeholder={{ color: "primary.black" }}
                focusBorderColor="white"
                _hover={{ borderColor: "white" }}
                borderRadius={100}
                borderWidth={2}
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
            icon={<FaFilter color="primary.black" />}
            variant="ghost"
            _hover={{ backgroundColor: "transparent", color: "white" }}
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
