import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const Grid = ({ rows, columns }) => {
  const rowNumbers = Array.from({ length: rows }, (_, index) => index + 1);
  const columnNumbers = Array.from(
    { length: columns },
    (_, index) => index + 1
  );

  return (
    <>
      <div style={{ flexWrap: "wrap" }}>
        {rowNumbers?.map((row) => (
          <div
            key={row}
            style={{
              display: "flex",
              // flexWrap: "wrap",
            }}
          >
            {columnNumbers?.map((column) => (
              <div
                key={column}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "0 0 20%",
                  borderRight: "2px solid #3C4044",
                  borderBottom: "2px solid #3C4044",
                  height: "156px",
                }}
              >
                <IoMdAddCircle />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
