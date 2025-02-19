import { Box, Center, Icon, Heading, Text, Button } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

export function GoalsPage() {
    return (
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Center>
                <Icon as={MdSettings} fontSize="3xl" color="blue.500" mb={2} />
            </Center>
            <Center height="50px">
                <Heading size="md" textAlign="center">
                    Goal Setting & Progress Monitoring
                </Heading>
            </Center>
            <Text mt={4} fontSize="sm" color="gray.700">
                Define your marketing goals and track your progress seamlessly. Stay focused on your objectives and
                measure your success.
            </Text>
            <Center mt={6}>
                <Button colorScheme="blue">Set Goals</Button>
            </Center>
        </Box>
    );
}
