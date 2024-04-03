import React, { useState, useEffect } from "react";
import FilterSortControls from "../Components/FilterSortControls";
import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";

export default {
  title: "FilterSortControls",
  component: FilterSortControls,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The FilterSortControls component is a form that provides various controls for filtering and sorting data. It includes a text input for searching by name, a date range input for filtering by date, and options for sorting by popularity and order. It also includes a min-max count input for filtering by a range of counts.",
      },
    },
  },
  args: {
    inname: "",
    fromDate: null,
    toDate: null,
    sortBy: "popular",
    order: "desc",
    min: null,
    max: null,
  },
  argTypes: {
    fromDate: { control: "date" },
    toDate: { control: "date" },
    sortBy: {
      control: "select",
      options: ["popular", "recent", "oldest"],
    },
    order: {
      control: "select",
      options: ["desc", "asc"],
    },
    min: { control: "number" },
    max: { control: "number" },
  },
};

const Template = (args) => {
  const [inname, setInname] = useState(args.inname);
  const [dateRange, setDateRange] = useState({
    fromDate: args.fromDate,
    toDate: args.toDate,
  });
  const [sortBy, setSortBy] = useState("popular");
  const [order, setOrder] = useState("desc");
  const [min, setMin] = useState(args.min);
  const [max, setMax] = useState(args.max);

  useEffect(() => {
    setInname(args.inname);
    setSortBy(args.sortBy);
    setOrder(args.order);
    setMin(args.min);
    setMax(args.max);
  }, [args.inname, args.sortBy, args.order, args.min, args.max]);

  useEffect(() => {
    setDateRange({ fromDate: args.fromDate, toDate: args.toDate });
  }, [args.fromDate, args.toDate]);

  const handleSetInname = (value) => {
    setInname(value);
  };

  const handleSetMin = (value) => {
    setMin(value);
  };

  const handleSetMax = (value) => {
    setMax(value);
  };

  const handleDateChange = (fromDate, toDate) => {
    setDateRange({ fromDate: fromDate, toDate: toDate });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FilterSortControls
        handleSearch={action("handleSearch")}
        inname={inname}
        setInname={handleSetInname}
        dateRange={dateRange}
        setDateRange={handleDateChange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        min={min}
        setMin={handleSetMin}
        max={max}
        setMax={handleSetMax}
      />
    </Box>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   inname: "",
//   fromDate: null,
//   toDate: null,
// };
