import * as React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Order = ({ order, setOrder }) => {
  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Order"
          onChange={handleChange}
        >
          <MenuItem value="desc">desc</MenuItem>
          <MenuItem value="asc">asc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Order;
