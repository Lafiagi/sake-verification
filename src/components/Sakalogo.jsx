"use client";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

const SakaLogo = () => {
  return (
    <Box
      width={"30%"}
      height={100}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={0}
      marginTop={0}
    >
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        style={{ alignSelf: "center" }}
      />
    </Box>
  );
};
export default SakaLogo;
