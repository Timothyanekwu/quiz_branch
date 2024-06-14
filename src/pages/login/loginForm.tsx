// components/login/LoginForm.tsx
import { Box, Stack, Heading } from "@chakra-ui/react";
import SubmitButton from "../../components/submitButton";
import InputField from "../../components/inputField";

const LoginForm = () => {
  return (
    <Box
      w={{ base: "100vw", sm: "90vw", md: "400px" }}
      p={{ md: 6 }}
      boxShadow={{ base: "none", md: "lg" }}
      borderRadius="md"
      bg="light.100"
    >
      <p className="text-md font-bold w-full mb-5">ADMIN LOGIN</p>
      <Stack spacing={4}>
        <InputField id="email" label="Email:" placeholder="Enter your email" />
        <InputField
          id="password"
          label="Password:"
          type="password"
          placeholder="Enter your password"
        />
        <SubmitButton value="Login" />
        <p className="text-xs">Forgot Password?</p>
      </Stack>
    </Box>
  );
};

export default LoginForm;
