import { Box, Center, Icon, Heading, Text, Button } from "@chakra-ui/react";
import { MdCampaign } from "react-icons/md";

export function CampaignsPage() {
    return (
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Center>
                <Icon as={MdCampaign} fontSize="3xl" color="blue.500" mb={2} />
            </Center>
            <Center height="50px">
                <Heading size="md" textAlign="center">
                    Campaign Management Tools
                </Heading>
            </Center>
            <Text mt={4} fontSize="sm" color="gray.700">
                Create, launch, and manage marketing campaigns across various channels with simplified tools. Streamline
                your marketing efforts and maximize efficiency.
            </Text>
            <Center mt={6}>
                <Button colorScheme="blue">Manage Campaigns</Button>
            </Center>
        </Box>
    );
}
