import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

interface ColorProps {
  fillColor: string;
}

const Bell: React.FC<ColorProps> = ({ fillColor }) => {
  return (
    <Box>
      <svg
        width="21"
        height="21"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 8.5C18.5 6.9087 17.8679 5.38258 16.7426 4.25736C15.6174 3.13214 14.0913 2.5 12.5 2.5C10.9087 2.5 9.38258 3.13214 8.25736 4.25736C7.13214 5.38258 6.5 6.9087 6.5 8.5C6.5 15.5 3.5 17.5 3.5 17.5H21.5C21.5 17.5 18.5 15.5 18.5 8.5Z"
          stroke={fillColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.2295 21.5C14.0537 21.8031 13.8014 22.0547 13.4978 22.2295C13.1941 22.4044 12.8499 22.4965 12.4995 22.4965C12.1492 22.4965 11.8049 22.4044 11.5013 22.2295C11.1977 22.0547 10.9453 21.8031 10.7695 21.5"
          stroke={fillColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};

export default Bell;
