import { Box, Center, Icon, Heading, Text, Button } from "@chakra-ui/react";
import { MdAnalytics } from "react-icons/md";

export function AnalyticsPage() {
    return (
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Center>
                <Icon as={MdAnalytics} fontSize="3xl" color="blue.500" mb={2} />
            </Center>
            <Center height="50px">
                <Heading size="md" textAlign="center">
                    Performance Analytics
                </Heading>
            </Center>
            <Text mt={4} fontSize="sm" color="gray.700">
                Access detailed reports and analytics to understand campaign effectiveness. Identify key metrics and
                areas for strategic improvements.
            </Text>
            <Center mt={6}>
                <Button colorScheme="blue">View Analytics</Button>
            </Center>
        </Box>
    );
}
