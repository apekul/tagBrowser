import React from "react";
import { Box, TextField } from "@mui/material";

export default function MinMaxCount({ min, max, setMin, setMax }) {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          name="min"
          label="Min count"
          value={min !== null ? min : ""}
          onChange={(event) => setMin(event.target.value)}
          type="number"
          sx={{ flexGrow: 1 }}
        />
        <TextField
          name="max"
          label="Max count"
          value={max !== null ? max : ""}
          onChange={(event) => setMax(event.target.value)}
          type="number"
          sx={{ flexGrow: 1 }}
        />
      </Box>
    </Box>
  );
}
