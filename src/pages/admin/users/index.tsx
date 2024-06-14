import React from "react";

import Sub from "./sub";
import TableSection from "../../../PageComponent/table";
import Pagination from "./pagination";

const Users = () => {
  const dummyData = [
    {
      name: "John Doe",
      institution: "University of Example",
      matric_number: "UOE123456",
      user_id: "user_001",
      department: "Computer Science",
    },
    {
      name: "Jane Smith",
      institution: "Institute of Learning",
      matric_number: "IOL654321",
      user_id: "user_002",
      department: "Mechanical Engineering",
    },
    {
      name: "Alice Johnson",
      institution: "Academy of Knowledge",
      matric_number: "AOK112233",
      user_id: "user_003",
      department: "Biology",
    },
  ];

  return (
    <div>
      <div className="w-full">
        <div>
          <Sub />
        </div>
        <div>
          <TableSection
            heading={[
              "Name",
              "User ID",
              "Institution",
              "Matric No.",
              "Department",
              "Actions",
            ]}
            body={dummyData}
          />
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Users;
