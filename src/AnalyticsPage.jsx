import React from "react";
import {
  Box,
  Heading,
  Flex,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdSearch, MdDownload } from "react-icons/md";

export function AnalyticsPage() {
  const tableData = [
    {
      campaign: "Summer Sale Ad",
      channel: "Facebook",
      clicks: 1500,
      conversions: 350,
      roi: "23%",
    },
    {
      campaign: "Back to School Promo",
      channel: "Google Ads",
      clicks: 2200,
      conversions: 520,
      roi: "31%",
    },
    {
      campaign: "Holiday Discount",
      channel: "Email",
      clicks: 800,
      conversions: 180,
      roi: "15%",
    },
    {
      campaign: "New Year Campaign",
      channel: "Instagram",
      clicks: 1800,
      conversions: 400,
      roi: "25%",
    },
  ];

  return (
    <Box p={6} bg={useColorModeValue("gray.50", "gray.800")}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="lg">Performance Analytics</Heading>
        <Button
          leftIcon={<Icon as={MdDownload} size="sm" />}
          colorScheme="blue"
        >
          Export Report
        </Button>
      </Flex>

      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={MdSearch} color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search campaigns..." />
        </InputGroup>
        <Select placeholder="Filter by Channel">
          <option value="facebook">Facebook</option>
          <option value="google">Google Ads</option>
          <option value="email">Email</option>
          <option value="instagram">Instagram</option>
        </Select>
        <Select placeholder="Sort by">
          <option value="roi">ROI</option>
          <option value="clicks">Clicks</option>
          <option value="conversions">Conversions</option>
        </Select>
      </Stack>

      <TableContainer
        bg="white"
        shadow="sm"
        borderRadius="md"
        borderWidth="1px"
      >
        <Table variant="simple">
          <TableCaption>
            Detailed analytics to understand campaign performance and identify
            areas for improvement.
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Campaign</Th>
              <Th>Channel</Th>
              <Th isNumeric>Clicks</Th>
              <Th isNumeric>Conversions</Th>
              <Th isNumeric>ROI</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((data, index) => (
              <Tr key={index}>
                <Td>{data.campaign}</Td>
                <Td>{data.channel}</Td>
                <Td isNumeric>{data.clicks}</Td>
                <Td isNumeric>{data.conversions}</Td>
                <Td isNumeric>{data.roi}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
