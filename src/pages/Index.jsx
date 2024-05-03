import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => (
  <Box p={4}>
    <Image src="/images/farm.jpg" alt="Apple Farm" />
    <VStack spacing={4}>
      <Heading as="h1" size="2xl">Welcome to Our Apple Farm</Heading>
      <Text fontSize="lg">Discover the taste of nature in every apple we grow.</Text>
      <Button as={Link} to="/about-us" colorScheme="teal">Learn More About Us</Button>
    </VStack>
  </Box>
);

export default Index;