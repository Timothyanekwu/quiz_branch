// components/login/LoginForm.tsx
import { Box, Stack, Heading } from "@chakra-ui/react";
import SubmitButton from "../../components/submitButton";
import InputField from "../../components/inputField";

const ForgotForm = () => {
  return (
    <Box
      w={{ base: "100vw", sm: "90vw", md: "400px" }}
      p={{ md: 6 }}
      boxShadow={{ base: "none", md: "lg" }}
      borderRadius="md"
      bg="light.100"
    >
      <p className="text-md font-bold w-full mb-5">FORGOT PASSWORD</p>
      <Stack spacing={4}>
        <InputField id="email" label="Email:" placeholder="example@gmail.com" />

        <SubmitButton value="Reset Password" />

        <p className="font-bold underline underline-offset-[6px] text-center">
          Back to login
        </p>
      </Stack>
    </Box>
  );
};

export default ForgotForm;
