"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
  Select,
  Spinner,
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
    cacRegistation: "",
    tin: "",
    productSource: "",
    producerNames: "",
    refund: "",
    noRefundReason: "",
  });

  const {
    nin,
    business_number,
    business_name,
    noRefundReason,
    cacRegistation,
    refund,
    tin,
    productSource,
    producerNames,
  } = formData;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const {
    isOpen: isErrorModalVisible,
    onOpen: openErrorModal,
    onClose: closeErrorModal,
  } = useDisclosure();
  const { verificationData } = React.useContext(OnboardingContext);

  const isFormValid = () => {
    return nin !== "" && business_number !== "" && business_name !== "";
  };

  const cacRegistationdata = [
    { key: "1", value: "yes" },
    { key: "2", value: "no" },
  ];

  const producers = [
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
    setError(null);

    try {
      const response = await axios.post("/marketplace/vendor-vetting/", {
        ...formData,
        ...verificationData,
      });
      localStorage.setItem("on_boarding_data", JSON.stringify(response?.data));
      localStorage.setItem("verified", "true");
      router.push("thankyou");
    } catch (error) {
      if (error.response && error.response.data) {
        const responseData = error.response.data;
        // Extract the error message from response data
        console.log(JSON.stringify(responseData));
        const errorMessage = parseErrorMessage(responseData);
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
    <Box bg="#fff" pt={30} pb={100} px={9}>
      <Box borderRadius={20} minHeight="65%" width="100%" p={10}>
        <FormControl marginBottom="10px">
          <FormLabel>
            Are you registered with Corporate Affairs Commission (CAC)?
          </FormLabel>
          <Select
            onChange={(e) =>
              handleInputChange("cacRegistationdata", e.target.value)
            }
            placeholder="Select option"
          >
            {cacRegistationdata.map((item) => (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            ))}
          </Select>
        </FormControl>

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="Business Number"
          value={business_number}
          onChange={(e) => handleInputChange("business_number", e.target.value)}
        />

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="Business Name"
          value={business_name}
          onChange={(e) => handleInputChange("business_name", e.target.value)}
        />

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="Tax Identification Number (TIN)"
          value={tin}
          onChange={(e) => handleInputChange("tin", e.target.value)}
        />

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="National Identity Number (NIN)"
          value={nin}
          onChange={(e) => handleInputChange("nin", e.target.value)}
        />

        <Text fontWeight="bold" fontSize={19} mb={5}>
          Product Authentication
        </Text>

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="Product Source"
          value={productSource}
          onChange={(e) => handleInputChange("productSource", e.target.value)}
        />

        <FormControl marginBottom="10px">
          <FormLabel>From Producers?</FormLabel>
          <Select
            onChange={(e) => handleInputChange("producers", e.target.value)}
            placeholder="Select option"
          >
            {producers.map((item) => (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            ))}
          </Select>
        </FormControl>

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="If yes, name them"
          value={producerNames}
          onChange={(e) => handleInputChange("producerNames", e.target.value)}
        />

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="Would you provide a full refund/replacement?"
          value={refund}
          onChange={(e) => handleInputChange("refund", e.target.value)}
        />

        <Input
          variant="outline"
          marginBottom="10px"
          placeholder="If no, state reasons"
          value={noRefundReason}
          onChange={(e) => handleInputChange("noRefundReason", e.target.value)}
        />

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

      <Modal isOpen={isErrorModalVisible} onClose={closeErrorModal}>
        <Box bg="#fff" p={20}>
          <Text fontSize={16} textAlign="center" textTransform="capitalize">
            {error ||
              "There was an error. Please ensure your email and phone number are not registered yet."}
          </Text>
          <Button
            onClick={closeErrorModal}
            marginTop={20}
            backgroundColor="#1e81ce"
            color="#fff"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Verification;
