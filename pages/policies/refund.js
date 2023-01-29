import React from "react";
import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

function RefundPolicy() {
  return (
    <Box bg="gray.50">
      <Box maxW="container.xl" minH="100vh" margin="auto" py={20} px={5}>
        <Head>
          <title>Refund Policy</title>
        </Head>
        <Heading textAlign="center">REFUND & RETURN POLICY</Heading>
        <Divider my={6} />

        <VStack spacing={10} mt={5}>
          <Box width="100%" fontWeight="light" fontSize="lg">
            <Heading
              _after={{
                content: "''",
                display: "block",
                width: "50px",
                height: "4px",
                background: "green.500",
                marginTop: "16px",
              }}
              fontSize="2xl"
              mb={5}
            >
              No Refund Policy
            </Heading>
            <Text mb={5} fontSize="xl">
              All sales are final, and the Company (Athayog Living) does not
              offer any money-back guarantees. You recognize and agree that you
              shall not be entitled to a refund for any purchase under any
              circumstances.
            </Text>
          </Box>
          <Box width="100%" fontWeight="light" fontSize="lg">
            <Heading
              fontSize="2xl"
              _after={{
                content: "''",
                display: "block",
                width: "50px",
                height: "4px",
                background: "green.500",
                marginTop: "16px",
              }}
              mb={5}
            >
              No Returns
            </Heading>
            <Text mb={5} fontWeight="light" fontSize="xl">
              We do not accept returns or exchanges
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default RefundPolicy;
