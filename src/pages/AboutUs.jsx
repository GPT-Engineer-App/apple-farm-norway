import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const AboutUs = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading as="h1" size="xl">About Us</Heading>
      <Text fontSize="lg">
        Nestled in the heart of Norway's pristine natural landscapes, our apple farm has been a family-run
        establishment for over a century. We pride ourselves on sustainable farming practices and a deep
        respect for the environment.
      </Text>
      <Text fontSize="lg">
        Our farm is not just a place to grow apples; it's a place where nature and nurture come together
        to create the perfect fruit. We invite you to learn more about our history and our commitment to
        quality and sustainability.
      </Text>
    </VStack>
  </Box>
);

export default AboutUs;