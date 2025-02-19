import {
  Box,
  Center,
  Icon,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  GridItem,
  Progress,
  useToast,
} from "@chakra-ui/react";
import {
  MdSettings,
  MdAdd,
  MdCheckCircle,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { useState } from "react";

export function GoalsPage() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Increase Website Traffic", target: 1000, current: 650 },
    { id: 2, title: "Generate More Leads", target: 500, current: 250 },
  ]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const [newGoalTarget, setNewGoalTarget] = useState("");
  const toast = useToast();

  const handleAddGoal = () => {
    setIsAddingGoal(true);
  };

  const handleCancelAddGoal = () => {
    setIsAddingGoal(false);
    setNewGoalTitle("");
    setNewGoalTarget("");
  };

  const handleSaveGoal = () => {
    if (!newGoalTitle || !newGoalTarget) {
      toast({
        title: "Please fill in all goal details.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newGoal = {
      id: goals.length + 1,
      title: newGoalTitle,
      target: parseInt(newGoalTarget, 10),
      current: 0,
    };
    setGoals([...goals, newGoal]);
    setIsAddingGoal(false);
    setNewGoalTitle("");
    setNewGoalTarget("");
    toast({
      title: "Goal created successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    toast({
      title: "Goal deleted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEditGoal = (id) => {
    // Implement edit functionality here
    toast({
      title: "Edit functionality is under development.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
      <Center>
        <Icon as={MdSettings} fontSize="3xl" color="blue.500" mb={2} />
      </Center>
      <Center height="50px">
        <Heading size="md" textAlign="center">
          Goal Setting & Progress Monitoring
        </Heading>
      </Center>
      <Text mt={4} fontSize="sm" color="gray.700" textAlign="center">
        Define your marketing goals and track your progress. Stay focused on
        your objectives and measure your success.
      </Text>

      <VStack mt={8} spacing={6} align="stretch">
        <Heading size="sm">Current Goals</Heading>
        {goals.length === 0 ? (
          <Text color="gray.500" textAlign="center" mt={4}>
            No goals set yet. Click "Add Goal" to get started.
          </Text>
        ) : (
          <VStack spacing={4} align="stretch">
            {goals.map((goal) => (
              <Box
                key={goal.id}
                borderWidth="1px"
                borderRadius="md"
                p={4}
                borderColor="gray.200"
              >
                <SimpleGrid columns={2} spacing={4}>
                  <GridItem colSpan={2}>
                    <Heading size="xs">{goal.title}</Heading>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Progress
                      value={(goal.current / goal.target) * 100}
                      borderRadius="md"
                    />
                    <Text fontSize="sm" mt={2} color="gray.600">
                      {goal.current} / {goal.target}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={2} textAlign="right">
                    <Button
                      size="sm"
                      colorScheme="yellow"
                      aria-label="Edit Goal"
                      iconSpacing="2"
                      leftIcon={<Icon as={MdEdit} />}
                      onClick={() => handleEditGoal(goal.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="red"
                      aria-label="Delete Goal"
                      iconSpacing="2"
                      leftIcon={<Icon as={MdDelete} />}
                      onClick={() => handleDeleteGoal(goal.id)}
                      ml={2}
                    >
                      Delete
                    </Button>
                  </GridItem>
                </SimpleGrid>
              </Box>
            ))}
          </VStack>
        )}

        {!isAddingGoal && (
          <Center>
            <Button
              colorScheme="blue"
              leftIcon={<Icon as={MdAdd} />}
              onClick={handleAddGoal}
            >
              Add New Goal
            </Button>
          </Center>
        )}

        {isAddingGoal && (
          <Box
            mt={6}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.200"
          >
            <Heading size="sm" mb={4}>
              Add New Goal
            </Heading>
            <FormControl id="goal-title" mb={4}>
              <FormLabel>Goal Title</FormLabel>
              <Input
                type="text"
                placeholder="e.g., Increase Website Traffic"
                value={newGoalTitle}
                onChange={(e) => setNewGoalTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="goal-target" mb={4}>
              <FormLabel>Target Value</FormLabel>
              <Input
                type="number"
                placeholder="e.g., 1000"
                value={newGoalTarget}
                onChange={(e) => setNewGoalTarget(e.target.value)}
              />
            </FormControl>
            <Center>
              <Button
                colorScheme="green"
                mr={2}
                onClick={handleSaveGoal}
                leftIcon={<Icon as={MdCheckCircle} />}
              >
                Save Goal
              </Button>
              <Button colorScheme="gray" onClick={handleCancelAddGoal}>
                Cancel
              </Button>
            </Center>
          </Box>
        )}
      </VStack>
    </Box>
  );
}
