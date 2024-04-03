import React from "react";
import { Grid, TextField, Button, Paper } from "@mui/material";

// Input Components
import DateRangeInput from "./Inputs/DateRangeInput";
import Sort from "./Inputs/Sort";
import Order from "./Inputs/Order";
import MinMaxCount from "./Inputs/MinMaxCount";

const FilterSortControls = ({ ...props }) => {
  return (
    <Paper elevation={3} sx={{ mt: 2, p: 2, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={props.inname}
            onChange={(e) => props.setInname(e.target.value)}
            id="outlined-basic"
            label="inname"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateRangeInput
            fromDate={props.fromDate}
            setFromDate={props.setFromDate}
            toDate={props.toDate}
            setToDate={props.setToDate}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Sort setSortBy={props.setSortBy} sortBy={props.sortBy} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Order setOrder={props.setOrder} order={props.order} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MinMaxCount
            min={props.min}
            setMin={props.setMin}
            max={props.max}
            setMax={props.setMax}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%" }}
            onClick={props.handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FilterSortControls;
