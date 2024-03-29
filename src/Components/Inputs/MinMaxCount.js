import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function MinMaxCount({ minMaxCount, setMinMaxCount }) {
  const [value, setValue] = useState([0, 999]);

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          name="min"
          label="Min count"
          value={value.min}
          onChange={handleChange}
          type="number"
          sx={{ width: "50%" }}
        />
        <TextField
          name="max"
          label="Max count"
          value={value.max}
          onChange={handleChange}
          type="number"
          sx={{ width: "50%" }}
        />
      </Box>
    </Box>
  );
}
