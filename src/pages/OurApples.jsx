import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const OurApples = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading as="h1" size="xl">Our Apples</Heading>
      <Text fontSize="lg">
        We grow a variety of apple types, each with its own unique flavor profile and harvest season:
      </Text>
      <Text fontSize="lg">
        - Honeycrisp: Sweet and crisp, perfect for a fresh snack.
        - Gala: Mildly sweet and ideal for salads.
        - Fuji: Incredibly sweet and great for baking.
        - Granny Smith: Famous for its tartness and excellent in pies.
      </Text>
      <Text fontSize="lg">
        Our apples are handpicked to ensure the highest quality and are available from August to October.
      </Text>
    </VStack>
  </Box>
);

export default OurApples;