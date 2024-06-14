import type { AppProps } from "next/app";
import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "@/configs/chakraTheme";
import { useRouter } from "next/router";
import Header from "../PageComponent/header";
import SideBar from "../PageComponent/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isAdmin = router.pathname.startsWith("/admin");
  if (isAdmin) {
    return (
      <ChakraProvider theme={chakraTheme}>
        <SideBar />
        <div className="w-full pl-[19.7vw] pr-10 h-screen">
          <Header />

          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
