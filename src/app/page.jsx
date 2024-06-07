import React from "react";
import "./App.css"; // Optional: Create this CSS file for custom styles
import { Box, Text } from "@chakra-ui/react";

const Sakaslist = () => {
  return (
    <Box
      bgColor={"blue"}
      minHeight={900}
      display={"flex"}
      flexDirection={"column"}
      bgGradient="linear(to-b, #4a90e2, #9013fe)" // Example gradient

    >
      <div className="sakaslist-container">
          <Text fontSize={25} color={"#fff"} textAlign={"center"}>
            Nigeria's Largest Network of Artisans & Vendors!!!
          </Text>
          <Text
            fontSize={50}
            mt={100}
            textAlign={"center"}
            fontWeight={"bold"}
            textShadow={100}
            color={"#fff"}
          >
            JOIN US TODAY AS A BUYER OR SELLER
          </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={50}
          backgroundImage={"url('/sakalady.jpeg')"} // Ensure the image path is correct
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          zIndex={-1} // Place the background image behind the text
          height={400}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.lafiagi.sakaslistmobile"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginTop: 250}}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="google-play-badge"
            />
          </a>
          <Text fontWeight={"bold"} fontSize={20} textAlign={"center"}>
            Coming soon to Apple (iOS) Devices.
          </Text>
        </Box>
      </div>
    </Box>
  );
};

export default Sakaslist;
