import React from "react";
// MUI
import { Box, TextField, Button, Paper } from "@mui/material";

// Input Components
import DateRangeInput from "./Inputs/DateRangeInput";
import Sort from "./Inputs/Sort";
import Order from "./Inputs/Order";
import MinMaxCount from "./Inputs/MinMaxCount";

const Navigation = ({ ...props }) => {
  // const [inname, setInName] = useState("");
  // const [dateRange, setDateRange] = useState({ fromDate: null, toDate: null });
  // const [sortBy, setSortBy] = useState("popular");
  // const [order, setOrder] = useState("desc");
  // const [min, setMin] = useState(null);
  // const [max, setMax] = useState(null);

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Text input, SortBy, OrderBy */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1, p: 1 }}>
            <TextField
              value={props.inname}
              onChange={(e) => props.setInName(e.target.value)}
              id="outlined-basic"
              label="inname"
              variant="outlined"
              fullWidth
            />
          </Box>
          {/* Date Range, Range count Slider */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <DateRangeInput setDateRange={props.setDateRange} />
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
          <Sort setSortBy={props.setSortBy} sortBy={props.sortBy} />
          <Order setOrder={props.setOrder} order={props.order} />
          <MinMaxCount
            min={props.min}
            setMin={props.setMin}
            max={props.max}
            setMax={props.setMax}
          />
        </Box>

        {/* Search button */}
        <Button variant="contained" sx={{ mt: 2 }} onClick={props.handleSearch}>
          Search
        </Button>
      </Box>
    </Paper>
  );
};

export default Navigation;
