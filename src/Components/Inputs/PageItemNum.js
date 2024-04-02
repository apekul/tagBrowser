import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const PageItemNum = ({ pageSize, setPageSize }) => {
  const handleChange = (event) => {
    setPageSize(event.target.value);
  };
  return (
    <Box sx={{ width: 110 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Items per page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageSize}
          label="Items per page"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PageItemNum;
