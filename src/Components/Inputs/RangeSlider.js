import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <p>Min/Max count</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "1rem", width: "2rem" }}>min {value[0]}</p>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={999}
        />
        <p style={{ marginLeft: "1rem", width: "2rem" }}>max {value[1]}</p>
      </div>
    </Box>
  );
}
