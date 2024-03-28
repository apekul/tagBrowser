import React, { useState } from "react";
// MUI
import { Grid, Box, TextField, Button, Paper, Typography } from "@mui/material";

// Input Components
import DateRangeInput from "./Inputs/DateRangeInput";
import Sort from "./Inputs/Sort";
import Order from "./Inputs/Order";
import RangeSlider from "./Inputs/RangeSlider";

const Navigation = () => {
  const [name, setName] = useState("");
  const [dateRange, setDateRange] = useState({ fromDate: null, toDate: null });
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Text input, SortBy, OrderBy */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1, p: 1 }}>
            <Typography variant="subtitle1">inname</Typography>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="filled-basic"
              label="by name"
              variant="filled"
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1, p: 1 }}>
              <Sort setSortBy={setSortBy} sortBy={sortBy} />
            </Box>
            <Box sx={{ flex: 1, p: 1 }}>
              <Order setOrder={setOrder} order={order} />
            </Box>
          </Box>
        </Box>
        {/* Date Range, Range count Slider */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1, p: 1 }}>
            <DateRangeInput setDateRange={setDateRange} />
          </Box>
          <Box sx={{ flex: 1, p: 1 }}>
            <RangeSlider />
          </Box>
        </Box>
        {/* Search button */}
        <Button variant="contained" sx={{ mt: 2 }}>
          Search
        </Button>
      </Box>
    </Paper>
  );
};

export default Navigation;
