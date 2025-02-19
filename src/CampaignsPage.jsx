import {
    Box,
    Flex,
    Heading,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Stack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    useToast
} from '@chakra-ui/react';
import { FiPlus, FiEdit, FiPlay, FiPause, FiBarChart2 } from 'react-icons/fi';

const campaignsData = [
    {
        id: 1,
        name: 'Summer Promotion - Email',
        channel: 'Email',
        status: 'Active',
        roi: '25%'
    },
    {
        id: 2,
        name: 'Back to School - Social Media',
        channel: 'Social Media',
        status: 'Paused',
        roi: '15%'
    },
    {
        id: 3,
        name: 'Holiday Sale - Google Ads',
        channel: 'Google Ads',
        status: 'Draft',
        roi: 'N/A'
    }
];

export function CampaignsPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const handleCreateCampaign = () => {
        onOpen();
    };

    const handleEditCampaign = (id) => {
        toast({
            title: 'Edit Campaign',
            description: `Editing campaign ID: ${id}`,
            status: 'info',
            duration: 3000,
            isClosable: true
        });
    };

    const handleLaunchCampaign = (id) => {
        toast({
            title: 'Launch Campaign',
            description: `Launching campaign ID: ${id}`,
            status: 'success',
            duration: 3000,
            isClosable: true
        });
    };

    const handlePauseCampaign = (id) => {
        toast({
            title: 'Pause Campaign',
            description: `Pausing campaign ID: ${id}`,
            status: 'warning',
            duration: 3000,
            isClosable: true
        });
    };

    const handleViewAnalytics = (id) => {
        toast({
            title: 'View Analytics',
            description: `Viewing analytics for campaign ID: ${id}`,
            status: 'info',
            duration: 3000,
            isClosable: true
        });
    };

    const handleSubmitNewCampaign = (event) => {
        event.preventDefault();
        const campaignName = event.target.campaignName.value;
        toast({
            title: 'Campaign Created',
            description: `Campaign "${campaignName}" created successfully.`,
            status: 'success',
            duration: 3000,
            isClosable: true
        });
        onClose();
    };

    return (
        <Box p={6} bg="white" borderRadius="md" boxShadow="md">
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Heading as="h2" size="lg">
                    Campaigns
                </Heading>
                <Button leftIcon={<FiPlus />} colorScheme="blue" onClick={handleCreateCampaign}>
                    Create Campaign
                </Button>
            </Flex>

            {campaignsData.length > 0 ? (
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Channel</Th>
                            <Th>Status</Th>
                            <Th isNumeric>ROI</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {campaignsData.map((campaign) => (
                            <Tr key={campaign.id}>
                                <Td>{campaign.name}</Td>
                                <Td>{campaign.channel}</Td>
                                <Td>{campaign.status}</Td>
                                <Td isNumeric>{campaign.roi}</Td>
                                <Td>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton
                                            icon={<FiEdit />}
                                            size="sm"
                                            aria-label="Edit Campaign"
                                            onClick={() => handleEditCampaign(campaign.id)}
                                        />
                                        {campaign.status === 'Draft' ||
                                        campaign.status === 'Paused' ? (
                                            <IconButton
                                                icon={<FiPlay />}
                                                size="sm"
                                                aria-label="Launch Campaign"
                                                colorScheme="green"
                                                onClick={() => handleLaunchCampaign(campaign.id)}
                                            />
                                        ) : (
                                            <IconButton
                                                icon={<FiPause />}
                                                size="sm"
                                                aria-label="Pause Campaign"
                                                colorScheme="orange"
                                                onClick={() => handlePauseCampaign(campaign.id)}
                                            />
                                        )}
                                        <IconButton
                                            icon={<FiBarChart2 />}
                                            size="sm"
                                            aria-label="View Analytics"
                                            colorScheme="teal"
                                            onClick={() => handleViewAnalytics(campaign.id)}
                                        />
                                    </Stack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text textAlign="center" color="gray.500" mt={4}>
                    No campaigns created yet.
                </Text>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Campaign</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmitNewCampaign}>
                            <FormControl id="campaignName" isRequired mb={4}>
                                <FormLabel>Campaign Name</FormLabel>
                                <Input name="campaignName" placeholder="Enter campaign name" />
                            </FormControl>
                            <FormControl id="campaignChannel" isRequired mb={4}>
                                <FormLabel>Channel</FormLabel>
                                <Select name="campaignChannel" placeholder="Select channel">
                                    <option value="Email">Email</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Google Ads">Google Ads</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </FormControl>
                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} type="submit">
                                    Create
                                </Button>
                                <Button variant="ghost" onClick={onClose}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
}
