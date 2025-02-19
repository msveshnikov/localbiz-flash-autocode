import {
    Box,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatGroup,
    Icon
} from '@chakra-ui/react';
import { MdTrendingUp, MdInsertChart } from 'react-icons/md';
import { FaPercentage } from 'react-icons/fa';

export function DashboardPage() {
    return (
        <Box p={6} bg="gray.50" minHeight="100vh">
            <Box maxW="container.xl" mx="auto">
                <Heading mb={6} as="h2" size="lg">
                    Marketing ROI Dashboard
                </Heading>

                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mb={6}>
                    <Card>
                        <CardHeader>
                            <Heading size="md">Total ROI</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stat>
                                <StatNumber>25%</StatNumber>
                                <StatHelpText>
                                    <Icon as={MdTrendingUp} color="green.500" mr={1} />
                                    Increase from last month
                                </StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Heading size="md">Lead Generation Rate</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stat>
                                <StatNumber>150 Leads/Month</StatNumber>
                                <StatHelpText>
                                    <Icon as={MdTrendingUp} color="green.500" mr={1} />
                                    +10% this month
                                </StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Heading size="md">Campaign Effectiveness</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stat>
                                <StatNumber>92%</StatNumber>
                                <StatHelpText>
                                    <Icon as={FaPercentage} color="green.500" mr={1} />
                                    High Performance Campaigns
                                </StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>
                </SimpleGrid>

                <Card mb={6}>
                    <CardHeader>
                        <Heading size="md">Marketing Performance Overview</Heading>
                    </CardHeader>
                    <CardBody>
                        <Box
                            height="300px"
                            bg="whiteAlpha.700"
                            borderRadius="md"
                            border="1px solid"
                            borderColor="gray.200"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Icon as={MdInsertChart} fontSize="6xl" color="gray.400" />
                            <Text ml={2} color="gray.600">
                                Chart Placeholder - Visual representation of campaign performance
                                will be displayed here.
                            </Text>
                        </Box>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Heading size="md">Key Metrics at a Glance</Heading>
                    </CardHeader>
                    <CardBody>
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
                            <StatGroup>
                                <Stat>
                                    <StatLabel>Total Campaigns</StatLabel>
                                    <StatNumber>24</StatNumber>
                                    <StatHelpText>Active & Past Campaigns</StatHelpText>
                                </Stat>
                                <Stat>
                                    <StatLabel>Customers Acquired</StatLabel>
                                    <StatNumber>450</StatNumber>
                                    <StatHelpText>New Customers This Quarter</StatHelpText>
                                </Stat>
                            </StatGroup>
                            <StatGroup>
                                <Stat>
                                    <StatLabel>Website Traffic</StatLabel>
                                    <StatNumber>15,000</StatNumber>
                                    <StatHelpText>Monthly Visits</StatHelpText>
                                </Stat>
                                <Stat>
                                    <StatLabel>Customer Retention Rate</StatLabel>
                                    <StatNumber>85%</StatNumber>
                                    <StatHelpText>Loyal Customer Base</StatHelpText>
                                </Stat>
                            </StatGroup>
                        </SimpleGrid>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    );
}
