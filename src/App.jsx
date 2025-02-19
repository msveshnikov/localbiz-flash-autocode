import { ChakraProvider, Box, Flex, Heading, Text, Button, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { DashboardPage } from './DashboardPage';
import { CampaignsPage } from './CampaignsPage';
import { AnalyticsPage } from './AnalyticsPage';
import { GoalsPage } from './GoalsPage';
import { ResourcesPage } from './ResourcesPage';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Container maxW="container.xl" p={5}>
                    <Box textAlign="center" mb={10}>
                        <Heading as="h1" size="2xl" fontWeight="bold" color="blue.600">
                            ROI Marketing Platform
                        </Heading>
                        <Text mt={2} fontSize="xl" color="gray.500">
                            Empowering Small Businesses with Data-Driven Marketing for Maximum ROI
                        </Text>
                        <Text mt={1} fontSize="md" color="gray.600">
                            Designed for plumbers, lawyers, doctors, and service-based small
                            businesses.
                        </Text>
                    </Box>

                    <Flex as="nav" mb={10} justify="space-around">
                        <Button as={Link} to="/" colorScheme="blue" variant="ghost">
                            Dashboard
                        </Button>
                        <Button as={Link} to="/campaigns" colorScheme="blue" variant="ghost">
                            Campaigns
                        </Button>
                        <Button as={Link} to="/analytics" colorScheme="blue" variant="ghost">
                            Analytics
                        </Button>
                        <Button as={Link} to="/goals" colorScheme="blue" variant="ghost">
                            Goals
                        </Button>
                        <Button as={Link} to="/resources" colorScheme="blue" variant="ghost">
                            Resources
                        </Button>
                    </Flex>

                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/campaigns" element={<CampaignsPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/goals" element={<GoalsPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                    </Routes>
                </Container>
            </Router>
        </ChakraProvider>
    );
}

export default App;
