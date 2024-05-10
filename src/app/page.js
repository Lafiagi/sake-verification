"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import axios from "./request/requests";
import { useRouter } from "next/navigation";
import OnboardingContext from "./context/OnboardingContext";
import { NavButton } from "@/components/NavButton";
import { Modal } from "@chakra-ui/react";

const Verification = () => {
  const history = useRouter();
  const { setVerificationData } = React.useContext(OnboardingContext);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    user_type: "",
    title: "",
    address: "",
    dob: "",
    product: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const {
    isOpen: isErrorModalVisible,
    onOpen: openErrorModal,
    onClose: closeErrorModal,
  } = useDisclosure();
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setFormData({ ...formData, dob: date });
    hideDatePicker();
  };
  const { email, first_name, last_name, phone_number, user_type, title } =
    formData;

  const isFormValid = () => {
    return (
      email !== "" &&
      first_name !== "" &&
      last_name !== "" &&
      phone_number !== "" &&
      user_type !== ""
    );
  };

  const accountTypes = [
    { key: "1", value: "Vendor" },
    { key: "2", value: "Artisan" },
  ];

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = async (user_type) => {
    setVerificationData(formData);
    if (user_type.toLowerCase() === "vendor") {
      return history.push("vendor");
    }
    return history.push("artisan");
  };

  console.log(`The data is ${JSON.stringify(formData)}`)
  return (
    <Box
      bg="#fff"
      pt={30}
      pb={100}
      px={30}
      margin={"auto"}
      width={"90%"}
      // display="flex"
      // justifyContent="center"
    >
      <NavButton step={1} />
      <Box>
        <Text fontSize={20} color="#000" mt={10} fontWeight={"bold"}>
          PERSONAL INFORMATION
        </Text>
        <Text fontSize={16} color="#555" mb={0}>
          Please provide your detailed personal information
        </Text>
        <Box borderRadius={20}  w="100%" p={10} pl={0}>
          <Input
            variant="outline"
            placeholder="Title"
            value={title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            marginBottom="10px"
            type="text"
          />
          <Input
            variant="outline"
            placeholder="First Name"
            marginBottom="10px"
            type="text"
            onChange={(e) => handleInputChange("first_name", e.target.value)}
            value={formData.first_name}
          />

          <Input
            variant="outline"
            placeholder="Last Name"
            marginBottom="10px"
            type="text"
            onChange={(e) => handleInputChange("last_name", e.target.value)}
            value={formData.last_name}
          />
          
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="date"
              onChange={(e) => handleInputChange("dob", e.target.value)}
              mb={4}
            />
          
          <Input
            variant="outline"
            placeholder="Email Address"
            marginBottom="10px"
            type="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={formData.email}
          />

          <Input
            variant="outline"
            placeholder="Phone Number"
            marginBottom="10px"
            type="email"
            onChange={(e) => handleInputChange("phone_number", e.target.value)}
            value={formData.phone_number}
          />

          <Input
            variant="outline"
            placeholder="Recent Residential Address"
            marginBottom="10px"
            type="email"
            onChange={(e) => handleInputChange("address", e.target.value)}
            value={formData.address}
          />

          <Text fontSize={20} color="#000" mt={5} fontWeight={"bold"}>
            BUSINESS INFORMATION
          </Text>
          <Text fontSize={16} color="#555" mb={0}>
            Please provide your detailed Business information
          </Text>
          <FormControl>
            <FormLabel mt={4}>Profession:</FormLabel>
            <Select
              onChange={(e) => handleInputChange("user_type", e.target.value)}
              placeholder="Select option"
            >
              {accountTypes.map((type) => (
                <option key={type.key} value={type.value}>
                  {type.value}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            onClick={() => handleNext(formData.user_type)}
            bg={isFormValid() ? "#1e81ce" : "#ccc"}
            mt={2}
            mb={4}
            disabled={!isFormValid()}
          >
            Next
          </Button>
        </Box>
      </Box>
      {loading ? <DefaultLoader /> : null}
      <Modal isOpen={isErrorModalVisible} onClose={closeErrorModal}>
        <Box bg="#fff" p={20}>
          <Text fontSize={16} textAlign="center" textTransform="capitalize">
            {error ||
              "There was an error. Please ensure your email and phone number are not registered yet."}
          </Text>
          <Button onClick={closeErrorModal} mt={20} bg="#1e81ce" color="#fff">
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

const styles = {
  dateInput: {
    borderColor: "#00afee",
    bg: "#eee",
    mt: 10,
    mb: 10,
    elevation: 5,
    textTransform: "capitalize",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  editableInput: {
    bg: "#fff",
  },
};

export default Verification;
