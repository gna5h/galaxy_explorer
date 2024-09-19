import React from "react";
import {
  CardBody,
  Card,
  Image,
  Heading,
  VStack,
  Box,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { Character } from "../../ts/types/character";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import CharacterModal from "../CharacterModal/CharacterModal.tsx";

export default function CharacterCard({ character }: { character: Character }) {
  const { status } = useSelector((state: RootState) => state.people);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Skeleton
      isLoaded={status !== "loading"}
      borderRadius="lg"
      fadeDuration={1}
    >
      <VStack onClick={onOpen} key={character.name} alignItems={"flex-start"}>
        <Card
          maxW="sm"
          bgColor={"white"}
          _hover={{ bgColor: "primary.yellow" }}
        >
          <CardBody padding={1.5}>
            <Image
              src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8fDA%3D"
              alt="Green double couch with wooden legs"
              objectFit={"cover"}
              borderRadius="lg"
            />
          </CardBody>
        </Card>
        <Box pl={3} bgColor={"primary.black"}>
          <Heading size="sm" color={"white"}>
            {character.name}
          </Heading>
        </Box>

        <CharacterModal
          isOpen={isOpen}
          onClose={onClose}
          character={character}
        />
      </VStack>
    </Skeleton>
  );
}
