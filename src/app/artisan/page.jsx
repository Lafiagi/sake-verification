"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import OnboardingContext from "../context/OnboardingContext";
import axios from "../../app/request/requests";

const Verification = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nin: "",
    business_number: "",
    business_name: "",
    yoe: "",
    cacRegistation: "",
    title: "",
    tin: "",
    certificates: "",
    educationLevel: "",
  });

  const {
    nin,
    business_number,
    business_name,
    cacRegistation,
    tin,
    certificates,
    yoe,
    educationLevel,
  } = formData;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { verificationData } = React.useContext(OnboardingContext);

  const isFormValid = () => {
    return (
      nin !== "" && business_number !== "" && business_name !== "" && yoe !== ""
    );
  };

  const cacRegistationdata = [
    { key: "1", value: "yes" },
    { key: "2", value: "no" },
  ];

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/marketplace/artisan-vetting/", {
        ...formData,
        ...verificationData,
      });
      localStorage.setItem("verified", "true");
      router.push("thankyou");
    } catch (error) {
      if (error.response && error.response.data) {
        const responseData = error.response.data;
        // Extract the error message from response data
        const errorMessage = parseErrorMessage(responseData?.message);
        setError(errorMessage);
      } else {
        setError("There was an error. Please all data are filled correctly.");
      }
    } finally {
      setLoading(false);
    }
  };

  const parseErrorMessage = (errorData) => {
    // Check if errorData is in the format {"email": ["error message"]}
    if (typeof errorData === "object" && errorData !== null) {
      const keys = Object.keys(errorData);
      if (keys.length > 0) {
        const firstKey = keys[0];
        const errorMessages = errorData[firstKey];
        if (Array.isArray(errorMessages) && errorMessages.length > 0) {
          return errorMessages[0]; // Return the first error message
        }
      }
    }
    return "There was an error. Please all data are filled correctly."; // Default error message
  };

  return (
    <Box bg="#fff" pt={30} pb={100} px={50}>
      <Box borderRadius={20} minHeight="65%" width="100%">
        <FormControl>
          <FormLabel mt={4}>
            Are you registered with Corporate Affairs Commission (CAC)?
          </FormLabel>
          <Select
            onChange={(e) =>
              handleInputChange("cacRegistation", e.target.value)
            }
            placeholder="Select option"
          >
            {cacRegistationdata.map((type) => (
              <option key={type.key} value={type.value}>
                {type.value}
              </option>
            ))}
          </Select>
        </FormControl>

        <Box marginBottom="10px" mt={4}>
          <Text>Business Number</Text>
          <Input
            variant="outline"
            value={business_number}
            onChange={(e) =>
              handleInputChange("business_number", e.target.value)
            }
          />
        </Box>

        <Box marginBottom="10px">
          <Text>Business Name</Text>
          <Input
            variant="outline"
            value={business_name}
            onChange={(e) => handleInputChange("business_name", e.target.value)}
          />
        </Box>

        <Box marginBottom="10px">
          <Text>Tax Identification Number (TIN)</Text>
          <Input
            variant="outline"
            value={tin}
            onChange={(e) => handleInputChange("tin", e.target.value)}
          />
        </Box>

        <Box marginBottom="10px">
          <Text>National Identity Number (NIN)</Text>
          <Input
            variant="outline"
            value={nin}
            onChange={(e) => handleInputChange("nin", e.target.value)}
          />
        </Box>

        <Text fontWeight="bold" fontSize={19} mb={0}>
          SKILLS AND EXPERIENCE
        </Text>

        <Box marginBottom="10px" mt={3}>
          <Text>Certificates</Text>
          <Input
            variant="outline"
            value={certificates}
            onChange={(e) => handleInputChange("certificates", e.target.value)}
          />
        </Box>

        <Box marginBottom="10px">
          <Text>Years of Experience</Text>
          <Input
            variant="outline"
            value={yoe}
            onChange={(e) => handleInputChange("yoe", e.target.value)}
          />
        </Box>

        <Box marginBottom="10px">
          <Text>Education Level</Text>
          <Input
            variant="outline"
            value={educationLevel}
            onChange={(e) =>
              handleInputChange("educationLevel", e.target.value)
            }
          />
        </Box>
        <Text fontSize={20} color={"#f33"}>
          {error}
        </Text>
        <Button
          onClick={handleRegister}
          backgroundColor={isFormValid() ? "#1e81ce" : "#999"}
          marginBottom={30}
          marginTop={10}
          isDisabled={!isFormValid()}
          color="#fff"
        >
          {loading ? <Spinner size="sm" color="white" /> : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default Verification;
