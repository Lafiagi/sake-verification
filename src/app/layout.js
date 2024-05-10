// app/layout.tsx
"use client";
import Image from "next/image";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
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
          <Box
            width={"10%"}
            height={60}
            margin={"auto"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={"/logo.png"}
              width={100}
              height={60}
              style={{ alignSelf: "center" }}
            />
          </Box>
          <Providers>
            <Box
              margin={"auto"}
              mt={20}
              width={"60%"}
              bgColor={"#fff"}
              minHeight={500}
            >
              {children}

              <Image
                src={"/sakamobile.png"}
                width={150}
                height={350}
                style={{ position: "absolute", top: "50%", right: "11%" }}
              />
            </Box>
          </Providers>
        </OnboardingContext.Provider>
      </body>
    </html>
  );
}
