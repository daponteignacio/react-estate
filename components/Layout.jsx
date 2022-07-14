import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>React Estate</title>
      </Head>

      <Box maxW="1280px" margin="auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
};
