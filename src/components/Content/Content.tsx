import React, { useEffect } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "../CharacterCard/CharacterCard.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

export default function Content({
  isSmallScreen,
}: {
  isSmallScreen: boolean | undefined;
}) {
  const { people } = useSelector((state: RootState) => state.people);

  useEffect(() => {
    console.log("PEOPLE: ", people.length);
  }, []);

  return (
    <Flex width={"100%"} padding={50}>
      <SimpleGrid columns={isSmallScreen ? 2 : 4} spacing={10}>
        {people.map((character) => (
          <CharacterCard character={character} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
