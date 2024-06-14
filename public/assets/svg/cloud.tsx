import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

interface ColorProps {
  fillColor: string;
}

const Cloud: React.FC<ColorProps> = ({ fillColor }) => {
  return (
    <Box>
      <svg
        width="19"
        height="19"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 10C19.5034 11.3199 19.1951 12.6219 18.6 13.8C17.8944 15.2118 16.8098 16.3992 15.4674 17.2293C14.1251 18.0594 12.5782 18.4994 11 18.5C9.68013 18.5035 8.37812 18.1951 7.2 17.6L1.5 19.5L3.4 13.8C2.80493 12.6219 2.49656 11.3199 2.5 10C2.50061 8.42179 2.94061 6.87488 3.77072 5.53258C4.60083 4.19028 5.78825 3.1056 7.2 2.40003C8.37812 1.80496 9.68013 1.49659 11 1.50003H11.5C13.5843 1.61502 15.553 2.49479 17.0291 3.97089C18.5052 5.44699 19.385 7.41568 19.5 9.50003V10Z"
          stroke={fillColor}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};

export default Cloud;
