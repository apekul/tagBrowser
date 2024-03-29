import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const PageItemNum = ({ pageItems, setPageItems }) => {
  const handleChange = (event) => {
    setPageItems(event.target.value);
  };
  return (
    <Box sx={{ width: 120, mr: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Items per page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageItems}
          label="Items per page"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PageItemNum;
