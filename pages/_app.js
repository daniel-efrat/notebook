import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"
import dotenv from "dotenv"

dotenv.config()

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
