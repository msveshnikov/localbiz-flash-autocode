import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Grid,
    GridItem,
    SimpleGrid,
    Container,
    Center,
} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <Container maxW="container.xl" p={5}>
                <Box textAlign="center" mb={10}>
                    <Heading as="h1" size="2xl">
                        ROI Marketing Platform
                    </Heading>
                    <Text mt={2} fontSize="xl">
                        Empowering Small Businesses with Data-Driven Marketing
                    </Text>
                </Box>

                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                    <GridItem>
                        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                            <Center height="50px">
                                <Heading size="md">ROI Tracking Dashboard</Heading>
                            </Center>
                            <Text mt={4}>
                                Visualize your marketing ROI in real-time. Track campaign performance and understand
                                your marketing spend effectiveness.
                            </Text>
                            <Center mt={4}>
                                <Button colorScheme="blue">View Dashboard</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                            <Center height="50px">
                                <Heading size="md">Campaign Management Tools</Heading>
                            </Center>
                            <Text mt={4}>
                                Create, launch, and manage your marketing campaigns across multiple channels with ease.
                                Simplify your marketing workflow.
                            </Text>
                            <Center mt={4}>
                                <Button colorScheme="blue">Manage Campaigns</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                            <Center height="50px">
                                <Heading size="md">Performance Analytics</Heading>
                            </Center>
                            <Text mt={4}>
                                Gain deep insights into your campaign performance with detailed reports and analytics.
                                Identify areas for improvement and optimize your strategies.
                            </Text>
                            <Center mt={4}>
                                <Button colorScheme="blue">View Analytics</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                            <Center height="50px">
                                <Heading size="md">Goal Setting & Progress</Heading>
                            </Center>
                            <Text mt={4}>
                                Set your marketing goals and monitor your progress. Stay on track and achieve your
                                business objectives with our intuitive goal setting features.
                            </Text>
                            <Center mt={4}>
                                <Button colorScheme="blue">Set Goals</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                            <Center height="50px">
                                <Heading size="md">Resource Library</Heading>
                            </Center>
                            <Text mt={4}>
                                Access a wealth of marketing guides, templates, and best practices tailored for small
                                businesses. Enhance your marketing knowledge and skills.
                            </Text>
                            <Center mt={4}>
                                <Button colorScheme="blue">Explore Resources</Button>
                            </Center>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Container>
        </ChakraProvider>
    );
}

export default App;
