import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';

const ContactUs = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading as="h1" size="xl">Contact Us</Heading>
      <FormControl id="contact-form" as="form">
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Your Name" />
        <FormLabel mt={4}>Email</FormLabel>
        <Input type="email" placeholder="Your Email" />
        <FormLabel mt={4}>Message</FormLabel>
        <Textarea placeholder="Your Message" />
        <Button mt={4} colorScheme="blue">Send Message</Button>
      </FormControl>
    </VStack>
  </Box>
);

export default ContactUs;