import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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

interface ColorProps {
  heading: string[];
  body: object[];
}

const TableSection: React.FC<ColorProps> = ({ heading, body }) => {
  const router = useRouter();

  return (
    <div>
      <Box sx={{ minHeight: "55vh" }}>
        <TableContainer>
          <Table variant="custom">
            <Thead>
              <Tr
                sx={{ textTransform: "capitalize" }}
                fontSize="2.5rem"
                backgroundColor="#E6E6E6"
                color={"#656565"}
              >
                {heading.map((field) => {
                  return (
                    <Th
                      key={Math.random()}
                      sx={{ textTransform: "capitalize" }}
                      borderLeftRadius={
                        heading.indexOf(field) === 0 ? "40px" : "0px"
                      }
                      borderRightRadius={
                        heading.indexOf(field) === heading.length - 1
                          ? "40px"
                          : "0px"
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
              {body.map((data) => {
                return (
                  <Tr key={Math.random()} fontSize={"0.75rem"}>
                    {Object.values(data).map((item) => {
                      return <Td key={Math.random()}>{item}</Td>;
                    })}

                    <>
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
                    </>
                    <Td display="flex">
                      <Image
                        src={
                          router.pathname.endsWith("/library")
                            ? "/assets/edit.svg"
                            : "/assets/tick.svg"
                        }
                        alt="tick"
                        width={15}
                        height={15}
                        className="mr-3"
                      />
                      <Image
                        src={
                          router.pathname.startsWith("/library")
                            ? "/assets/download.svg"
                            : "/assets/delete.svg"
                        }
                        alt="delete"
                        width={15}
                        height={15}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TableSection;
