import React from "react";
import {
  CardBody,
  Card,
  Image,
  Heading,
  CardFooter,
  VStack,
  Box,
} from "@chakra-ui/react";

export default function CharacterCard() {
  return (
    <VStack alignItems={"flex-start"}>
      <Card maxW="sm" bgColor={"primary.yellow"}>
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
          Living room Sofa
        </Heading>
      </Box>
    </VStack>
  );
}
