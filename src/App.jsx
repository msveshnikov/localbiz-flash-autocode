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
    Icon,
} from "@chakra-ui/react";
import {
    MdDashboard,
    MdCampaign,
    MdAnalytics,
    MdSettings,
    MdLibraryBooks,
} from "react-icons/md";

function App() {
    return (
        <ChakraProvider>
            <Container maxW="container.xl" p={5}>
                <Box textAlign="center" mb={10}>
                    <Heading as="h1" size="2xl" fontWeight="bold" color="blue.600">
                        ROI Marketing Platform
                    </Heading>
                    <Text mt={2} fontSize="xl" color="gray.500">
                        Empowering Small Businesses with Data-Driven Marketing for Maximum ROI
                    </Text>
                    <Text mt={1} fontSize="md" color="gray.600">
                        Designed for plumbers, lawyers, doctors, and service-based small businesses.
                    </Text>
                </Box>

                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                    <GridItem>
                        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
                            <Center>
                                <Icon as={MdDashboard} fontSize="3xl" color="blue.500" mb={2} />
                            </Center>
                            <Center height="50px">
                                <Heading size="md" textAlign="center">ROI Tracking Dashboard</Heading>
                            </Center>
                            <Text mt={4} fontSize="sm" color="gray.700">
                                Visualize your marketing ROI in real-time. Monitor campaign performance and ensure every
                                dollar spent contributes to tangible business growth.
                            </Text>
                            <Center mt={6}>
                                <Button colorScheme="blue">View Dashboard</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
                            <Center>
                                <Icon as={MdCampaign} fontSize="3xl" color="blue.500" mb={2} />
                            </Center>
                            <Center height="50px">
                                <Heading size="md" textAlign="center">Campaign Management Tools</Heading>
                            </Center>
                            <Text mt={4} fontSize="sm" color="gray.700">
                                Create, launch, and manage marketing campaigns across various channels with simplified
                                tools. Streamline your marketing efforts and maximize efficiency.
                            </Text>
                            <Center mt={6}>
                                <Button colorScheme="blue">Manage Campaigns</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
                            <Center>
                                <Icon as={MdAnalytics} fontSize="3xl" color="blue.500" mb={2} />
                            </Center>
                            <Center height="50px">
                                <Heading size="md" textAlign="center">Performance Analytics</Heading>
                            </Center>
                            <Text mt={4} fontSize="sm" color="gray.700">
                                Access detailed reports and analytics to understand campaign effectiveness. Identify key
                                metrics and areas for strategic improvements.
                            </Text>
                            <Center mt={6}>
                                <Button colorScheme="blue">View Analytics</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
                            <Center>
                                <Icon as={MdSettings} fontSize="3xl" color="blue.500" mb={2} />
                            </Center>
                            <Center height="50px">
                                <Heading size="md" textAlign="center">Goal Setting & Progress Monitoring</Heading>
                            </Center>
                            <Text mt={4} fontSize="sm" color="gray.700">
                                Define your marketing goals and track your progress seamlessly. Stay focused on your
                                objectives and measure your success.
                            </Text>
                            <Center mt={6}>
                                <Button colorScheme="blue">Set Goals</Button>
                            </Center>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
                            <Center>
                                <Icon as={MdLibraryBooks} fontSize="3xl" color="blue.500" mb={2} />
                            </Center>
                            <Center height="50px">
                                <Heading size="md" textAlign="center">Resource Library</Heading>
                            </Center>
                            <Text mt={4} fontSize="sm" color="gray.700">
                                Explore marketing guides, templates, and best practices tailored for small businesses.
                                Enhance your marketing knowledge and skills.
                            </Text>
                            <Center mt={6}>
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