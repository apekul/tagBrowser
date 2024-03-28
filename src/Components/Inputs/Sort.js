import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Sort = ({ setSortBy, sortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <FormControl sx={{ maxWidth: 120 }}>
      <p>Sort by</p>
      <Select
        value={sortBy}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="popular">popular</MenuItem>
        <MenuItem value="activity">activity</MenuItem>
        <MenuItem value="name">name</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
