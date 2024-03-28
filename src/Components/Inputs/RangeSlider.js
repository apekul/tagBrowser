import * as React from "react";
import { Box, Typography, Slider } from "@mui/material";
export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: 1 }}>
      <Typography variant="subtitle1">Min/Max count</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2" sx={{ width: "2rem" }}>
          min {value[0]}
        </Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={999}
          sx={{ flex: 1 }}
        />
        <Typography variant="body2" sx={{ width: "2rem" }}>
          max {value[1]}
        </Typography>
      </Box>
    </Box>
  );
}
