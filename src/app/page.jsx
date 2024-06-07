import React from "react";
import { Box, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";

const Sakaslist = () => {
  const [isLargerThan768] = typeof useMediaQuery === "function" ? useMediaQuery("(min-width: 768px)") : [false];

  return (
    <Box position="relative" height="100vh" width="100vw" overflow="hidden">
      {isLargerThan768 ? (
        <Box position="relative" height="100%" width="100%">
          <Image
            src="/image copy.png" // Ensure this path is correct for the desktop image
            alt="Sakaslist promotion desktop"
            objectFit="cover"
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
          />
          <Link
            href="https://play.google.com/store/apps/details?id=com.lafiagi.sakaslistmobile"
            isExternal
            position="absolute"
            // Adjust the top, left, width, and height to match the button's position and size
            top="50%"
            left="25%"
            width="200px"
            height="60px"
            transform="translate(-50%, -50%)"
          />
        </Box>
      ) : (
        <Image
          src="/image.png" // Ensure this path is correct for the mobile image
          alt="Sakaslist promotion mobile"
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />
      )}
      {!isLargerThan768 && (
        <Box
          position="absolute"
          bottom="20px"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          color="white"
          paddingX={4}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.lafiagi.sakaslistmobile"
            isExternal
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              width="150px"
              marginBottom={2}
            />
          </Link>
          <Text color="#000" fontSize={20} fontWeight="bold" textAlign="center">
            Coming soon to Apple (iOS) Devices.
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Sakaslist;
