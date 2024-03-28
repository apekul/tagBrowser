import React, { useState, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";

const DateRangeInput = ({ setDateRange }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const unixTimestamp = (date) => {
    return Math.floor(new Date(date).getTime() / 1000);
  };

  useEffect(() => {
    const newFromDate = fromDate ? unixTimestamp(fromDate) : null;
    const newToDate = toDate ? unixTimestamp(toDate) : null;
    setDateRange({ fromDate: newFromDate, toDate: newToDate });
  }, [fromDate, toDate, setDateRange]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle1">Date Range</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="from Date"
            value={fromDate}
            onChange={(newValue) => {
              setFromDate(newValue);
            }}
          />
          <DatePicker
            label="to Date"
            value={toDate}
            onChange={(newValue) => {
              setToDate(newValue);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default DateRangeInput;
