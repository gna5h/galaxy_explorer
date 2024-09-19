import React from "react";
import { HStack, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store.ts";
import { fetchPeople } from "../../store/thunks/people_thunk.ts";

const ITEMS_PER_PAGE = 10;

export default function Pagination({ currentPage, setCurrentPage }) {
  const { count } = useSelector((state: RootState) => state.people);
  const dispatch = useAppDispatch();
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    dispatch(fetchPeople(page));
  };

  return (
    <HStack width={"100%"} justifyContent={"center"}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Button
            _hover={{ backgroundColor: "primary.yellow" }}
            key={page}
            borderWidth={currentPage === page ? 0 : 1}
            borderRadius={5}
            borderColor={"white"}
            bg={page === currentPage ? "primary.yellow" : "transparent"}
            onClick={() => handlePageChange(page)}
          >
            <Text color={currentPage === page ? "primary.black" : "white"}>
              {page}
            </Text>
          </Button>
        )
      )}
    </HStack>
  );
}
