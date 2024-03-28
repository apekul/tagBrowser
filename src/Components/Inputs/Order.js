import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Order = ({ order, setOrder }) => {
  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <FormControl sx={{ maxWidth: 120 }}>
      <p>Order</p>
      <Select
        value={order}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="desc">desc</MenuItem>
        <MenuItem value="asc">asc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Order;
