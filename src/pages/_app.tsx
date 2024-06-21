import { useState } from "react";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "@/configs/chakraTheme";
import { useRouter } from "next/router";
import Header from "./PageComponent/header";
import SideBar from "./PageComponent/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [view, setView] = useState<boolean>(false);

  const isAdmin = router.pathname.startsWith("/admin");
  if (isAdmin) {
    return (
      <ChakraProvider theme={chakraTheme}>
        <SideBar view={view} setView={setView} />

        <div className="main">
          <Header setView={setView} view />
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
