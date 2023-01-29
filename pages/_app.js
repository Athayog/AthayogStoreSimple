import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Josefin_Sans, Rubik } from "@next/font/google";
import { extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const theme = extendTheme({
  fonts: {
    rubik: rubik.style.fontFamily,
    heading: rubik.style.fontFamily,
    body: rubik.style.fontFamily,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily="rubik">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}
