import React from "react";
import Sub from "./sub";
import TableSection from "../../../PageComponent/table";
import Pagination from "./pagination";

const Library = () => {
  const filesData = [
    // Added
    {
      file_name: "Engineering Algebra",
      date_uploaded: "2023-06-10",
      course_code: "ENG101",
    },
    {
      file_name: "Thermodynamics",
      date_uploaded: "2023-06-12",
      course_code: "ENG102",
    },
    {
      file_name: "Fluid Mechanics",
      date_uploaded: "2023-06-14",
      course_code: "ENG103",
    },
  ];

  return (
    <div>
      <div className="w-full">
        <Sub />

        <TableSection
          heading={[
            "Name",
            "User ID",
            "Institution",
            "Matric No.",
            "Department",
          ]}
          body={filesData}
        />
        <Pagination />
      </div>
    </div>
  );
};

export default Library;
