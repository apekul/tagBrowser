import React, { useState } from "react";
// MUI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Input Components
import DateRangeInput from "./Inputs/DateRangeInput";
import Sort from "./Inputs/Sort";
import Order from "./Inputs/Order";
import RangeSlider from "./Inputs/RangeSlider";

const Navigation = () => {
  const [name, setName] = useState("");
  const [dateRange, setDateRange] = useState({ fromDate: null, toDate: null });
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <p>inname</p>
        <TextField
          // error
          style={{ width: "300px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="by name"
          variant="outlined"
        />
      </div>
      <DateRangeInput setDateRange={setDateRange} />
      <RangeSlider />
      <Sort setSortBy={setSortBy} sortBy={sortBy} />
      <Order setOrder={setOrder} order={order} />
      <Button style={{ width: "300px" }} variant="contained">
        Search
      </Button>
    </div>
  );
};

export default Navigation;
