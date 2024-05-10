"use client";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const NavButton = ({ step }) => {
  const router = useRouter();
  return (
    <Box
      style={{
        justifyContent: "space-between",
        padding: 0,
        display: "flex",
      }}
    >
      {step > 1 ? (
        <IconButton
          icon="arrow-left"
          iconColor={"#fff"}
          size={20}
          containerColor="#3c9ae2"
          onPress={() => router.back()}
        />
      ) : (
        <Box style={{ flex: 1 }}></Box>
      )}

      <Text style={{ fontSize: 17 }}>Step {step}/2</Text>
    </Box>
  );
};
