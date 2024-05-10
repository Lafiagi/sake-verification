"use client";
import React, { useEffect, useState } from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import axios from "../../app/request/requests";

const height = window.innerHeight;

const CountdownItem = ({ value, title }) => {
  return (
    <Center flexDirection="column">
      <Text fontSize="2xl" fontWeight="bold" color="white">
        {String(value).padStart(2, "0")}
      </Text>
      <Text fontSize="md" color="white">
        {title}
      </Text>
    </Center>
  );
};

const GoLiveScreen = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [goliveDate, setGoliveDate] = React.useState(null);
  const expirationDate = new Date(goliveDate);

  useEffect(() => {
    axios.get("/users/golive-date/").then((response) => {
      setGoliveDate(response?.data?.date);
    });
  }, []);

  useEffect(() => {
    if (goliveDate) {
      const expirationDate = new Date(goliveDate);
      const intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(expirationDate));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [goliveDate]);

  function calculateTimeRemaining(expirationDate) {
    if (!expirationDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const now = new Date();
    const timeDiff = expirationDate - now;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <Box flex={1} backgroundColor="#3c9ae2">
      <Box
        marginY={50}
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Text color="white" fontSize="lg" textAlign="center">
          Hi There,
        </Text>
        <Box marginLeft={2}>
          <Icon name="hand-wave" boxSize={6} color="#f0bb94" />
        </Box>
      </Box>

      <Box padding={4}>
        <Text color="white" fontSize="lg" textAlign="center">
          You will enjoy special gifts from us for your early bird registration!
        </Text>
      </Box>

      <Center>
        <Image src={"/clock3.png"} height={height * 0.25} marginTop={50} />
      </Center>
      <Box marginTop={2}>
        <Text color="#a3d269" fontSize="xl" textAlign="center">
          We are going LIVE in
        </Text>
      </Box>

      <Center
        flexDirection="row"
        justifyContent="space-around"
        padding={4}
        marginTop={4}
      >
        <CountdownItem value={timeRemaining.days} title="Days" />
        <CountdownItem value={timeRemaining.hours} title="Hours" />
        <CountdownItem value={timeRemaining.minutes} title="Minutes" />
        <CountdownItem value={timeRemaining.seconds} title="Seconds" />
      </Center>
    </Box>
  );
};

export default GoLiveScreen;
