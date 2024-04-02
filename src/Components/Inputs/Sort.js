import * as React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Sort = ({ setSortBy, sortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value="popular">popular</MenuItem>
          <MenuItem value="activity">activity</MenuItem>
          <MenuItem value="name">name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
