import React, { useState } from "react";
import {
  Heading,
  Input,
  InputGroup,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../store/store.ts";
import { searchPeople } from "../../store/thunks/people_thunk.ts";
import Filter from "../Filter/Filter.tsx";

export default function Search() {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    dispatch(searchPeople(keyword));
  };

  return (
    <VStack alignItems={"center"} bg={"#1d1d1d"} width={"100%"}>
      <HStack
        height={"5vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={8}
      >
        <Heading color={"primary.yellow"} size={"lg"} pl={10}>
          Galaxy Explorer
        </Heading>
      </HStack>

      <VStack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"15vh"}
        bgColor={"primary.black"}
        borderTopColor={"primary.lightgray"}
        borderTopWidth={1}
      >
        <HStack>
          <InputGroup width={"50vw"}>
            <Input
              placeholder="Search by name"
              _placeholder={{ color: "primary.lightgray" }}
              focusBorderColor="white"
              _hover={{ borderColor: "white" }}
              borderRadius={8}
              borderWidth={2}
              borderColor={"primary.lightgray"}
              color={"primary.lightgray"}
              size="md"
              onChange={(event) => setKeyword(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </InputGroup>
          <Button
            _hover={{ opacity: 10, bgColor: "primary.darkishblue" }}
            onClick={handleSearch}
            bgColor={"primary.lightblue"}
            color={"white"}
            borderRadius={8}
          >
            Search
          </Button>
          <Filter />
        </HStack>
      </VStack>
    </VStack>
  );
}
