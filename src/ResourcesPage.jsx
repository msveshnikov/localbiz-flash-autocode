import React, { useState } from "react";
import {
  Box,
  Center,
  Icon,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  FormControl,
  Select,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import { MdLibraryBooks, MdSearch } from "react-icons/md";

const mockResources = [
  {
    id: 1,
    title: "The Ultimate Guide to SEO for Small Businesses",
    description:
      "Learn how to optimize your online presence and attract more customers through search engines.",
    category: "Marketing Guides",
    link: "#",
  },
  {
    id: 2,
    title: "Social Media Marketing Templates",
    description:
      "Download ready-to-use templates to boost your social media engagement and brand visibility.",
    category: "Templates",
    link: "#",
  },
  {
    id: 3,
    title: "Email Marketing Best Practices",
    description:
      "Discover proven strategies to create effective email campaigns that convert leads into customers.",
    category: "Best Practices",
    link: "#",
  },
  {
    id: 4,
    title: "Content Marketing Handbook",
    description:
      "A comprehensive guide to creating valuable content that resonates with your target audience.",
    category: "Marketing Guides",
    link: "#",
  },
  {
    id: 5,
    title: "ROI Calculator Template",
    description:
      "Use this template to calculate and track the return on investment of your marketing efforts.",
    category: "Templates",
    link: "#",
  },
  {
    id: 6,
    title: "Customer Acquisition Strategies",
    description:
      "Explore effective strategies to expand your customer base and drive business growth.",
    category: "Best Practices",
    link: "#",
  },
];

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const toast = useToast();

  const handleResourceClick = () => {
    toast({
      title: "Resource link coming soon!",
      description: "This feature is under development.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || resource.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...Array.from(new Set(mockResources.map((resource) => resource.category))),
  ];

  return (
    <Box p={6} bg="gray.50" minHeight="100vh">
      <Center>
        <Box
          maxWidth="container.md"
          bg="white"
          shadow="md"
          borderRadius="md"
          p={6}
          w="100%"
        >
          <Center flexDirection="column" mb={8}>
            <Icon as={MdLibraryBooks} fontSize="4xl" color="blue.500" mb={2} />
            <Heading size="lg" textAlign="center">
              Resource Library
            </Heading>
            <Text mt={2} color="gray.600" textAlign="center">
              Explore marketing guides, templates, and best practices tailored
              for small businesses.
            </Text>
          </Center>

          <VStack spacing={4}>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdSearch} color="gray.400" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search resources"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <Select
                placeholder="Filter by Category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </FormControl>
          </VStack>

          <SimpleGrid mt={8} spacing={6} columns={{ sm: 1, md: 2, lg: 2 }}>
            {filteredResources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <Heading size="md">{resource.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Stack spacing={2}>
                    <Text fontSize="sm" color="gray.700">
                      {resource.description}
                    </Text>
                    <Divider />
                    <ButtonGroup justifyContent="end" size="sm">
                      <Button
                        variant="ghost"
                        colorScheme="blue"
                        onClick={handleResourceClick}
                      >
                        View Resource
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </CardBody>
              </Card>
            ))}
            {filteredResources.length === 0 && (
              <Center p={5} color="gray.500">
                No resources found.
              </Center>
            )}
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
  );
}
