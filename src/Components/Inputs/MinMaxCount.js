import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";

export default function MinMaxCount({ min, max, setMin, setMax }) {
  const [minCount, setMinCount] = useState(min);
  const [maxCount, setMaxCount] = useState(max);

  useEffect(() => {
    setMin(minCount);
    setMax(maxCount);
  }, [minCount, maxCount, setMin, setMax]);

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
          value={minCount !== null ? minCount : ""}
          onChange={(event) => setMinCount(event.target.value)}
          type="number"
          sx={{ width: "50%" }}
        />
        <TextField
          name="max"
          label="Max count"
          value={maxCount !== null ? maxCount : ""}
          onChange={(event) => setMaxCount(event.target.value)}
          type="number"
          sx={{ width: "50%" }}
        />
      </Box>
    </Box>
  );
}
