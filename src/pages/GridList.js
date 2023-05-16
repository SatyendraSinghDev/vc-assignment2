import React, { useState } from "react";
import { BsTable } from "react-icons/bs";
import Grid from "../components/Grid";

const GridList = () => {
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);
  const [inputRows, setInputRows] = useState(null);
  const [inputColumns, setInputColumns] = useState(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setRows(inputRows);
    setColumns(inputColumns);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "1", backgroundColor: "#33373D" }}>
        <div style={{ padding: "20px 20px 20px 20px" }}>
          <h6 className="mt-3 text-white">Create a Video Wall</h6>
          <form onSubmit={handlerSubmit}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <label htmlFor="rows" className="text-white d-block">
                  Row
                </label>
                <input
                  id="rows"
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
                  onChange={(e) => setInputRows(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="columns" className="text-white d-block">
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
                  onChange={(e) => setInputColumns(e.target.value)}
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
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </form>

          <div
            className="d-flex justify-content-between"
            style={{ padding: "5px 0px 0px 5px" }}
          >
            <div
              onClick={() => {
                setRows(2);
                setColumns(3);
              }}
            >
              <BsTable className="text-white table-icon" />
              <p className="text-white">2x3</p>
            </div>
            <div
              onClick={() => {
                setRows(3);
                setColumns(4);
              }}
            >
              <BsTable className="text-white table-icon" />
              <p className="text-white">3x4</p>
            </div>
            <div
              onClick={() => {
                setRows(4);
                setColumns(5);
              }}
            >
              <BsTable className="text-white table-icon" />
              <p className="text-white">4x5</p>
            </div>
            <div
              onClick={() => {
                setRows(5);
                setColumns(6);
              }}
            >
              <BsTable className="text-white table-icon" />
              <p className="text-white">5x6</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: "4", backgroundColor: "#060606" }}>
        <Grid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default GridList;
