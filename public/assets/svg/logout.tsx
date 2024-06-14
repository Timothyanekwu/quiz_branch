import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

interface ColorProps {
  fillColor: string;
}

const Logout: React.FC<ColorProps> = ({ fillColor }) => {
  return (
    <Box>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.2L2 15.2V2H18V14ZM15 9H13V7H15V9ZM11 9H9V7H11V9ZM7 9H5V7H7"
          fill={fillColor}
        />
      </svg>
    </Box>
  );
};

export default Logout;
