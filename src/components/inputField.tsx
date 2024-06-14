// components/login/InputField.tsx
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
}: InputFieldProps) => (
  <FormControl id={id}>
    <FormLabel fontSize="small">{label}</FormLabel>
    <Input
      type={type}
      placeholder={placeholder}
      borderRadius={13}
      fontSize={"small"}
    />
  </FormControl>
);

export default InputField;
