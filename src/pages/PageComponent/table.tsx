import React from "react";
import { useRouter } from "next/router";
import { Edit, Tick, Download, Delete } from "../../../public/assets/icons";

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

interface TableSectionProps {
  heading: string[];
  body: Record<string, string | number>[];
}

const TableSection: React.FC<TableSectionProps> = ({ heading, body }) => {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "55vh", marginBottom: "40px" }}>
      <TableContainer>
        <Table variant="custom">
          <Thead>
            <Tr
              sx={{ textTransform: "capitalize" }}
              fontSize="2.5rem"
              backgroundColor="#E6E6E6"
              color="#656565"
            >
              {heading.map((field, index) => {
                return (
                  <Th
                    key={field}
                    sx={{ textTransform: "capitalize" }}
                    borderLeftRadius={index === 0 ? "40px" : "0px"}
                    borderRightRadius={
                      index === heading.length - 1 ? "40px" : "0px"
                    }
                    fontSize="sm"
                  >
                    {field}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {body.map((data, rowIndex) => {
              return (
                <Tr key={rowIndex} fontSize="0.75rem">
                  {Object.values(data).map((item, colIndex) => {
                    return <Td key={`${rowIndex}-${colIndex}`}>{item}</Td>;
                  })}
                  {router.pathname.endsWith("/library") && (
                    <Td>
                      <div className="flex">
                        <div className="bg-[#E6E6E6] rounded-full p-2">
                          Users
                        </div>
                        <div className="bg-[#E6E6E6] rounded-full p-2 ml-2">
                          Tag #3
                        </div>
                      </div>
                    </Td>
                  )}
                  <Td display="flex">
                    {router.pathname.endsWith("/library") ? <Edit /> : <Tick />}
                    {router.pathname.startsWith("/library") ? (
                      <Download />
                    ) : (
                      <Delete />
                    )}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableSection;
