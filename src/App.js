import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import GridList from "./pages/GridList";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<GridList />} />
      </Routes>
    );
  }
}

export default App;
