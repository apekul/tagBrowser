import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

const DateRangeInput = ({ toDate, setToDate, fromDate, setFromDate }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="from Date"
          value={fromDate}
          maxDate={toDate}
          onChange={(newValue) => {
            setFromDate(newValue);
          }}
          sx={{ flexGrow: 1 }}
        />
        <DatePicker
          label="to Date"
          value={toDate}
          minDate={fromDate}
          onChange={(newValue) => {
            if (newValue && newValue >= fromDate) {
              setToDate(newValue);
            }
          }}
          sx={{ flexGrow: 1 }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DateRangeInput;
