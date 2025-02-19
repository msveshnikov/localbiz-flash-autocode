import { Box, Center, Icon, Heading, Text, Button } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";

export function DashboardPage() {
    return (
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Center>
                <Icon as={MdDashboard} fontSize="3xl" color="blue.500" mb={2} />
            </Center>
            <Center height="50px">
                <Heading size="md" textAlign="center">
                    ROI Tracking Dashboard
                </Heading>
            </Center>
            <Text mt={4} fontSize="sm" color="gray.700">
                Visualize your marketing ROI in real-time. Monitor campaign performance and ensure every dollar spent
                contributes to tangible business growth.
            </Text>
            <Center mt={6}>
                <Button colorScheme="blue">View Dashboard</Button>
            </Center>
        </Box>
    );
}
