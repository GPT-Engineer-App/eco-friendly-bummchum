import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, Divider, Stack, Link, useColorModeValue } from "@chakra-ui/react";
import { FaLeaf, FaShoppingCart, FaReadme } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const colorScheme = useColorModeValue("pink", "green");

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch" py={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            Bumm Chum: Your Eco-Friendly Companion for Cleanliness
          </Heading>
          <Text fontSize="xl" colorScheme={colorScheme}>
            Welcome to Bumm Chum, your go-to destination for eco-friendly flushable toilet wipes.
          </Text>
        </Box>

        <Divider />

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            About Bumm Chum
          </Heading>
          <Text>At Bumm Chum, we believe in the power of nature to deliver superior cleanliness without harming the planet. Our flushable toilet wipes are made from 100% plant-based fibers, ensuring they break down easily and are safe for sewer and septic systems. Say goodbye to plastic waste and hello to a greener, cleaner alternative with Bumm Chum.</Text>
          <Image src="https://images.unsplash.com/photo-1705807645378-1d3de7930d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGVjby1mcmllbmRseXxlbnwwfHx8fDE3MDg2NzUxOTl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </VStack>

        <Divider />

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            Packaging Design
          </Heading>
          <Text>Our packaging reflects our commitment to sustainability and innovation. Inspired by Japanese-style comic strips, our cardboard packaging features minimalist black or white line art illustrations of our mascot, Klean Krack, in action. Each package is designed to be 100% plastic-free, aligning with our eco-conscious values.</Text>
          <Image src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMjBwYWNrYWdpbmclMjBkZXNpZ258ZW58MHx8fHwxNzA4Njc1MTk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </VStack>

        <Divider />

        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center" justify="center">
          <Box textAlign="center" p={4} boxShadow="lg" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Product 1
            </Heading>
            <Image src="https://via.placeholder.com/150" borderRadius="md" alt="Product 1" />
            <Button mt={4} leftIcon={<FaShoppingCart />} colorScheme={colorScheme} size="md">
              Shop Now
            </Button>
          </Box>
          <Box textAlign="center" p={4} boxShadow="lg" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Product 2
            </Heading>
            <Image src="https://via.placeholder.com/150" borderRadius="md" alt="Product 2" />
            <Button mt={4} leftIcon={<FaShoppingCart />} colorScheme={colorScheme} size="md">
              Shop Now
            </Button>
          </Box>
        </Stack>

        <Divider />

        <VStack align="start" spacing={4}>
          <Heading as="h2" size="lg">
            Experience the Difference
          </Heading>
          <Text>Join the Bumm Chum revolution and experience the difference for yourself. From our plant-based wipes to our environmentally friendly packaging, every aspect of Bumm Chum is designed with sustainability and effectiveness in mind. Make the switch to Bumm Chum and discover a cleaner, greener way to stay fresh.</Text>
        </VStack>

        <Divider />

        <VStack align="center" spacing={4}>
          <Stack direction="row" spacing={4}>
            <Button leftIcon={<FaShoppingCart />} colorScheme={colorScheme} size="lg">
              Shop Now
            </Button>
            <Button leftIcon={<FaReadme />} variant="outline" colorScheme={colorScheme} size="lg">
              Learn More
            </Button>
          </Stack>
          <Text>
            Ready to make the switch to eco-friendly cleanliness? <Link color="teal.500">Join the revolution now!</Link>
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
