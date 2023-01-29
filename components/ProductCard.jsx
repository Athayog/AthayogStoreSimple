import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  name,
  image,
  description,
  attributes,
  price,
  url,
}) {
  return (
    <Box maxW="sm" border="1px" rounded="lg" borderColor="gray.200">
      <Box>
        <Box borderRadius="lg" overflow="hidden">
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            height={250}
            width={250}
          />
        </Box>
        <Divider />
        <Stack mt="2" spacing="3" p={3}>
          <Box>
            <Heading size="sm" fontWeight="600">
              {name}
            </Heading>
            <Text mt={1} color="green.900" fontSize="lg">
              ₹{price}
            </Text>
          </Box>

          <Box>
            <Link href={"/product" + url} passHref>
              <Button size="sm" width="full" variant="solid" colorScheme="gray">
                Check Now
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
