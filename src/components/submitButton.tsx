// components/login/SubmitButton.tsx
import { Button } from "@chakra-ui/react";

interface QuizSVGProps {
  value: string;
}

const SubmitButton: React.FC<QuizSVGProps> = ({ value }) => (
  <Button
    mt={4}
    colorScheme="primary"
    bgColor={"primary.100"}
    type="submit"
    w="full"
  >
    {value}
  </Button>
);

export default SubmitButton;
