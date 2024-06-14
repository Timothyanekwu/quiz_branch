import React from "react";
import Image from "next/image";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const TableSection = () => {
  return (
    <div>
      <Box sx={{ minHeight: "55vh" }}>
        <TableContainer>
          <Table variant="custom">
            <Thead>
              <Tr
                sx={{ textTransform: "capitalize" }}
                backgroundColor="#E6E6E6"
                color={"#656565"}
              >
                <Th
                  sx={{ textTransform: "capitalize" }}
                  borderLeftRadius={"40px"}
                  font-size="sm"
                >
                  Name
                </Th>
                <Th sx={{ textTransform: "capitalize" }}>User ID</Th>
                <Th sx={{ textTransform: "capitalize" }}>Institution</Th>
                <Th sx={{ textTransform: "capitalize" }} isNumeric>
                  Matric No.
                </Th>
                <Th sx={{ textTransform: "capitalize" }}>Department</Th>
                <Th
                  sx={{ textTransform: "capitalize" }}
                  borderRightRadius={"40px"}
                >
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr fontSize={12}>
                <Td>Adetola Okoya</Td>
                <Td>LA-0001</Td>
                <Td>YabaTech</Td>
                <Td isNumeric>F/HD/19/10056</Td>
                <Td>Mass Communication</Td>
                <Td sx={{ display: "flex" }}>
                  <Image
                    src="/assets/tick.svg"
                    alt="tick"
                    width={15}
                    height={15}
                    className="mr-3"
                  />
                  <Image
                    src="/assets/delete.svg"
                    alt="delete"
                    width={15}
                    height={15}
                  />
                </Td>
              </Tr>
              <Tr fontSize={12}>
                <Td>Adetola Okoya</Td>
                <Td>LA-0001</Td>
                <Td>YabaTech</Td>
                <Td isNumeric>F/HD/19/10056</Td>
                <Td>Mass Communication</Td>
                <Td sx={{ display: "flex" }}>
                  <Image
                    src="/assets/tick.svg"
                    alt="tick"
                    width={15}
                    height={15}
                    className="mr-3"
                  />
                  <Image
                    src="/assets/delete.svg"
                    alt="delete"
                    width={13}
                    height={13}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TableSection;
