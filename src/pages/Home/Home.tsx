import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store.ts";
import { fetchPeople } from "../../store/thunks/people_thunk.ts";
import Search from "../../components/Search/Search.tsx";
import Content from "../../components/Content/Content.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";

export default function Home() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.people);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPeople(1));
    }
  }, [dispatch, status]);

  return (
    <Box bg={"primary.black"} minHeight="100vh">
      <VStack gap={10} paddingBottom={10}>
        <Search isSmallScreen={isSmallScreen} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Content isSmallScreen={isSmallScreen} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </VStack>
    </Box>
  );
}
