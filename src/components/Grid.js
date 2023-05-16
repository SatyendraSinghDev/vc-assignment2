import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const Grid = ({ rows, columns }) => {
  const dummyArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {dummyArray.map(() => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "0 0 20%",
            borderRight: "2px solid #3C4044",
            borderBottom: "2px solid #3C4044",
            height: "173px",
          }}
        >
          <IoMdAddCircle size={26} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
