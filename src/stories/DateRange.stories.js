import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import DateRangeInput from "../Components/Inputs/DateRangeInput";

export default {
  title: "DateRange Input",
  component: DateRangeInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "This component displays a date range input.",
      },
    },
  },
  args: {
    fromDate: null,
    toDate: null,
  },
  argTypes: {
    fromDate: { control: "date" },
    toDate: { control: "date" },
  },
};

const Template = (args) => {
  const [fromDate, setFromDate] = useState(args.fromDate);
  const [toDate, setToDate] = useState(args.toDate);

  useEffect(() => {
    setFromDate(args.fromDate ? dayjs(args.fromDate) : null);
    setToDate(args.toDate ? dayjs(args.toDate) : null);
  }, [args.fromDate, args.toDate]);

  return (
    <DateRangeInput
      fromDate={fromDate}
      setFromDate={setFromDate}
      toDate={toDate}
      setToDate={setToDate}
    />
  );
};

export const Default = Template.bind({});
