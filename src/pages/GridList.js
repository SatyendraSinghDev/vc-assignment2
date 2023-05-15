import React from "react";
import Grid from "../components/Grid";

const GridList = () => {
  // return <Grid rows={3} columns={5} />;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", backgroundColor: "gray" }}>
        <h6 className="mt-3 text-white">Create a Video Wall</h6>
        <label forHtml="rows" className="text-white d-block">
          Row
        </label>
        <input type="text" style={{ width: "50px", height: "40px" }} />
      </div>
      <div style={{ flex: "4", backgroundColor: "black" }}>Right Div</div>
    </div>
  );
};

export default GridList;
