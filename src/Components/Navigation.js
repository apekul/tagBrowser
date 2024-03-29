import React, { useState } from "react";
// MUI
import { Box, TextField, Button, Paper } from "@mui/material";

// Input Components
import DateRangeInput from "./Inputs/DateRangeInput";
import Sort from "./Inputs/Sort";
import Order from "./Inputs/Order";
import MinMaxCount from "./Inputs/MinMaxCount";

const Navigation = () => {
  const [name, setName] = useState("");
  const [dateRange, setDateRange] = useState({ fromDate: null, toDate: null });
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");
  const [minMaxCount, setMinMaxCount] = useState([0, 9999]);

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Text input, SortBy, OrderBy */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1, p: 1 }}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="inname"
              variant="outlined"
              fullWidth
            />
          </Box>
          {/* Date Range, Range count Slider */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <DateRangeInput setDateRange={setDateRange} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            pl: 1,
            py: 1,
          }}
        >
          <Sort setSortBy={setSortBy} sortBy={sortBy} />
          <Order setOrder={setOrder} order={order} />
          <MinMaxCount
            minMaxCount={minMaxCount}
            setMinMaxCount={setMinMaxCount}
          />
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
