import React, { useState, useEffect } from "react";
import FilterSortControls from "../Components/FilterSortControls";
import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";
import dayjs from "dayjs";

export default {
  title: "FilterSortControls",
  component: FilterSortControls,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
    inname: {
      control: "text",
      description: "Name to filter the tags by.",
    },
    fromDate: {
      control: "date",
      type: { name: "date", required: false },
      description: "Start date for the range.",
    },
    toDate: {
      control: "date",
      type: { name: "date", required: false },
      description: "End date for the range.",
    },
    sortBy: {
      control: "select",
      options: ["popular", "activity", "name"],
      description: "Field to sort the tags by.",
    },
    order: {
      control: "select",
      options: ["desc", "asc"],
      description: "Order to sort the tags in.",
    },
    min: {
      control: "number",
      type: { name: "number", required: false },
      description: "Minimum value for the range.",
    },
    max: {
      control: "number",
      type: { name: "number", required: false },
      description: "Maximum value for the range.",
    },
  },
};

const Template = (args) => {
  const [inname, setInname] = useState(args.inname);
  const [fromDate, setFromDate] = useState(args.fromDate);
  const [toDate, setToDate] = useState(args.toDate);
  const [sortBy, setSortBy] = useState(args.sortBy);
  const [order, setOrder] = useState(args.order);
  const [min, setMin] = useState(args.min);
  const [max, setMax] = useState(args.max);

  useEffect(() => {
    setInname(args.inname);
    setFromDate(args.fromDate ? dayjs(args.fromDate) : null);
    setToDate(args.toDate ? dayjs(args.toDate) : null);
    setSortBy(args.sortBy);
    setOrder(args.order);
    setMin(args.min);
    setMax(args.max);
  }, [
    args.inname,
    args.sortBy,
    args.order,
    args.min,
    args.max,
    args.fromDate,
    args.toDate,
  ]);

  const handleSetInname = (value) => {
    setInname(value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FilterSortControls
        handleSearch={action("handleSearch")}
        inname={inname}
        setInname={handleSetInname}
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
      />
    </Box>
  );
};

export const Default = Template.bind({});
