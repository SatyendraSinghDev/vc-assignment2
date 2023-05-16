import React from "react";
import { BsTable } from "react-icons/bs";
import Grid from "../components/Grid";

const GridList = () => {
  // return <Grid rows={3} columns={5} />;
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "1", backgroundColor: "#33373D" }}>
        <div style={{ padding: "20px 20px 20px 20px" }}>
          <h6 className="mt-3 text-white">Create a Video Wall</h6>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <label forHtml="rows" className="text-white d-block">
                Row
              </label>
              <input
                type="text"
                style={{
                  width: "50px",
                  height: "40px",
                  backgroundColor: "#33373D",
                  border: "1px solid #3C4044",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  padding: "18px",
                }}
              />
            </div>
            <div>
              <label forHtml="columns" className="text-white d-block">
                Column
              </label>
              <input
                id="columns"
                type="text"
                style={{
                  width: "50px",
                  height: "40px",
                  backgroundColor: "#33373D",
                  border: "1px solid #3C4044",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  padding: "18px",
                }}
              />
            </div>
            <div className="mt-4">
              <button
                className="btn text-white"
                style={{
                  backgroundColor: "#39548A",
                  width: "70px",
                  height: "40px",
                }}
              >
                Create
              </button>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ padding: "5px 0px 0px 5px" }}
          >
            <div>
              <BsTable className="text-white table-icon" />
              <p className="text-white">2x3</p>
            </div>
            <div>
              <BsTable className="text-white table-icon" />
              <p className="text-white">2x3</p>
            </div>
            <div>
              <BsTable className="text-white table-icon" />
              <p className="text-white">2x3</p>
            </div>
            <div>
              <BsTable className="text-white table-icon" />
              <p className="text-white">2x3</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: "4", backgroundColor: "#060606" }}>Right Div</div>
    </div>
  );
};

export default GridList;
