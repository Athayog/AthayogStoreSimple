import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
import Data from "../storedata.json";
import ProductCard from "./ProductCard";

function Arrivals() {
  console.log(Data);
  return (
    <Box>
      <Heading fontSize="2xl" fontWeight="700">
        New Arrivals
      </Heading>
      <Flex mt={6} gap={10} wrap="wrap">
        {Data.map((product, idx) => {
          return <ProductCard key={idx} {...product} />;
        })}
      </Flex>
    </Box>
  );
}

export default Arrivals;
