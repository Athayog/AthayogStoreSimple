import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

function Shipping() {
  return (
    <Box bg="gray.50">
      <Box maxW="container.xl" minH="100vh" margin="auto" py={20} px={5}>
        <Head>
          <title>Shipping Policy</title>
        </Head>
        <Heading textAlign="center">SHIPPING POLICY</Heading>
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
              Shipment processing time
            </Heading>
            <Text w="full" mb={5} fontSize="xl">
              All orders are processed within 3-4 business days. Orders are not
              shipped or delivered on weekends or holidays.
            </Text>
            <Text w="full" mb={5} fontSize="xl">
              If we are experiencing a high volume of orders, shipments may be
              delayed by a few days. Please allow additional days in transit for
              delivery. If there will be a significant delay in shipment of your
              order, we will contact you via email or telephone.
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
              Shipping rates
            </Heading>
            <Text mb={5} fontSize="xl">
              Shipping charges for your order will be calculated and displayed
              at checkout.
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
              Shipment confirmation & Order
            </Heading>
            <Text mb={5} fontSize="xl">
              You will receive a Shipment Confirmation email once your order has
              shipped containing your tracking number(s). The tracking number
              will be active within 24 hours.
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
              Damages
            </Heading>
            <Text mb={5} fontSize="xl">
              Athayog Living is not liable for any products damaged or lost
              during shipping. If you received your order damaged, please
              contact the shipment carrier to file a claim. Please save all
              packaging materials and damaged goods before filing a claim.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Shipping;
