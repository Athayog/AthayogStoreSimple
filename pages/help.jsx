import React from "react";
import { Heading, Text, Box, Flex, Divider } from "@chakra-ui/react";
export default function help() {
  return (
    <div>
      <Heading fontSize="3xl">Any questions regarding our products?</Heading>
      <Flex mt={2} p={5} bg="green.50">
        {" "}
        <Box mt={0} rounded="sm" maxW="fit-content">
          <Text>
            Email US at{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="mailto:info@athayogliving.com"
            >
              info@athayogliving.com
            </a>
          </Text>
          <Text>
            Call US at{" "}
            <a style={{ textDecoration: "underline" }} href="tel:+919611771434">
              +91 8690333111
            </a>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
