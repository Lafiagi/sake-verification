import React from "react";
import { Box, Image, Link, Text, Heading } from "@chakra-ui/react";

const Sakaslist = () => {
  return (
    <Box position="relative" height="100vh" width="100vw" overflow="hidden">
      {/* Mobile Image */}
      <Image
        src="/image.png" // Ensure this path is correct for the mobile image
        alt="Sakaslist promotion mobile"
        objectFit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        display={{ base: "block", md: "none" }}
      />

      {/* Desktop Code */}
      <Box
        display={{ base: "none", md: "block" }}
        background="linear-gradient(to bottom, #4facfe, #00f2fe)"
        height="100vh"
        width="100vw"
        position="relative"
        color="white"
        textAlign="center"
        overflow="hidden"
      >
        <Box width="100%">
          <Image src="/logo.png" alt="Sakaslist Logo" mb={4} mx="auto" />
          <Heading fontSize="2xl" fontWeight="bold">
            Nigeria's Largest Network of Artisans & Vendors!!!
          </Heading>
          <Heading fontSize="4xl" fontWeight="bold">
            JOIN US TODAY AS A BUYER OR SELLER
          </Heading>
        </Box>
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.lafiagi.sakaslistmobile"
            isExternal
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              width="200px"
              mx="auto"
              mb={4}
            />
          </Link>
          <Text color="black" fontSize="lg" fontWeight="bold">
            Coming soon to Apple (iOS) Devices.
          </Text>
        </Box>
        <Box position="absolute" bottom="0" width="100%" textAlign="center">
          <Image
            src="/lady.png" // Ensure this path is correct for the person's image
            alt="Person Image"
            objectFit="contain"
            width="30%"
            mx="auto"
          />
        </Box>
      </Box>

      {/* Mobile View: Google Play Button */}
      <Box
        position="absolute"
        bottom="20px"
        width="100%"
        display={{ base: "flex", md: "none" }}
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
    </Box>
  );
};

export default Sakaslist;
