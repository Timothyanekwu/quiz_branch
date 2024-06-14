import type { AppProps } from "next/app";
import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "@/configs/chakraTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
