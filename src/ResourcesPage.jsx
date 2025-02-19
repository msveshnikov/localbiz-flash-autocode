import { Box, Center, Icon, Heading, Text, Button } from "@chakra-ui/react";
import { MdLibraryBooks } from "react-icons/md";

export function ResourcesPage() {
    return (
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Center>
                <Icon as={MdLibraryBooks} fontSize="3xl" color="blue.500" mb={2} />
            </Center>
            <Center height="50px">
                <Heading size="md" textAlign="center">
                    Resource Library
                </Heading>
            </Center>
            <Text mt={4} fontSize="sm" color="gray.700">
                Explore marketing guides, templates, and best practices tailored for small businesses. Enhance your
                marketing knowledge and skills.
            </Text>
            <Center mt={6}>
                <Button colorScheme="blue">Explore Resources</Button>
            </Center>
        </Box>
    );
}
