// app/layout.tsx
"use client";
import { Providers } from "./providers";
import { Box, Image } from "@chakra-ui/react";
import OnboardingContext from "./context/OnboardingContext";
import React from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [verificationData, setVerificationData] = React.useState({});
  const [goliveDate, setGoliveDate] = React.useState(null);
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isVerified = localStorage.getItem("verified");

      if (isVerified === "true") {
        router.push("golive");
      }
    }
  }, []);

  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f7f7f7" }}>
        <OnboardingContext.Provider
          value={{
            verificationData: verificationData,
            setVerificationData: setVerificationData,
            goliveDate: goliveDate,
            setGoliveDate: setGoliveDate,
          }}
        >
          <Providers>
            <Box
              margin={"auto"}
              mt={{ lg: 20, md: 20 }}
              width={{ lg: "60%" }}
              bgColor={"#fff"}
              minHeight={500}
            >
              {children}

              {/* <Image
                src={"/sakamobile.png"}
                position={"fixed"}
                top={"40%"}
                right={{ base: "0%", md: "0%", lg: "10%" }}
                style={{ width: 150 }}
                width={{ md: 40 }}
              /> */}
            </Box>
          </Providers>
        </OnboardingContext.Provider>
      </body>
    </html>
  );
}
