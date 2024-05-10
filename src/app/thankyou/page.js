"use client";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const item = {
  image: "/thankyou.png",
  backgroundColor: "#22bcb5",
  textComp: (
    <Text color="#fff">
      Thank you for your verification! Your information is being reviewed, and
      we'll be in touch soon.
    </Text>
  ),
};

const Thankyou = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      padding={5}
    >
      <Image
        src={item.image}
        width="100%"
        maxH="10%"
        mt={10}
        objectFit="contain"
        height={200}
      />
      <Flex
        direction="column"
        height="50%"
        backgroundColor="#1e81ce"
        width="100%"
        padding={30}
        mt={10}
        alignItems="center"
      >
        <Text fontSize={25} textAlign="center" color="#fff" mb={4}>
          {item.textComp}
        </Text>
        <Text fontSize={17} textAlign="center" color="#999" mt={2}>
          {item?.text}
        </Text>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          width="100%"
        >
          <Flex alignItems="center">
            <Icon as={IoMdCheckmarkCircleOutline} color="#fff" boxSize={6} />
            <Text color="#fff" ml={2}>
              {item?.iconText}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={MdKeyboardArrowRight} color="#fff" boxSize={6} />
            <Text color="#fff" ml={2}>
              {item?.iconText2}
            </Text>
          </Flex>
        </Flex>
        <Button
          onClick={() => router.replace("golive")}
          variant="outline"
          colorScheme="white"
          borderColor="#fff"
          mt={4}
          width="100%"
        >
          GO TO APP
        </Button>
      </Flex>
    </Flex>
  );
};

export default Thankyou;
