import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Character } from "../../ts/types/character";

export default function CharacterModal({
  isOpen,
  onClose,
  character,
}: {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        backgroundColor={"primary.black"}
        borderRadius="lg"
        borderColor={"primary.yellow"}
        borderWidth={5}
      >
        <Image
          src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8fDA%3D"
          alt="Green double couch with wooden legs"
          objectFit={"cover"}
          borderRadius="lg"
        />
        <ModalHeader color={"primary.yellow"}>{character.name}</ModalHeader>
        <ModalCloseButton color={"white"} />

        <Divider />

        <ModalBody>
          <VStack
            justifyContent={"flex-start"}
            gap={5}
            alignItems={"flex-start"}
          >
            <VStack alignItems={"flex-start"}>
              <Text color={"white"}>Height: {character.height}</Text>
              <Text color={"white"}>Weight: {character.mass}</Text>
            </VStack>

            <Divider />

            <VStack alignItems={"flex-start"}>
              <Text color={"white"}>Hair Color: {character.hair_color}</Text>
              <Text color={"white"}>Skin Color: {character.skin_color}</Text>
              <Text color={"white"}>Eye Color: {character.eye_color}</Text>
            </VStack>

            <Divider />

            <VStack alignItems={"flex-start"}>
              <Text color={"white"}>Birth Year: {character.birth_year}</Text>
              <Text color={"white"}>Gender: {character.gender}</Text>
            </VStack>

            <Divider />

            <VStack alignItems={"flex-start"}>
              <Text color={"white"}>Films:</Text>
              <UnorderedList>
                {character.films.map((film) => (
                  <ListItem color={"white"}>{film}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
