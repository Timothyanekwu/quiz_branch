import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

interface ColorProps {
  fillColor: string;
}

const User: React.FC<ColorProps> = ({ fillColor }) => {
  return (
    <Box>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 22V8H7V22H3ZM10 22V2H14V22H10ZM17 22V14H21V22H17Z"
          fill={fillColor}
        />
      </svg>
    </Box>
  );
};

export default User;
