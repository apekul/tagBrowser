import React, { useState, useEffect } from "react";
import Sort from "../Components/Inputs/Sort";

export default {
  title: "SortBy",
  component: Sort,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component displays a dropdown for sorting by popularity, activity, or name.",
      },
    },
  },
  args: {
    sortBy: "popular",
  },
  argTypes: {
    sortBy: {
      control: "select",
      options: ["popular", "activity", "name"],
      description: "The field to sort by.",
    },
  },
};

const Template = (args) => {
  const [sortBy, setSortBy] = useState(args.sortBy);

  useEffect(() => {
    setSortBy(args.sortBy);
  }, [args.sortBy]);

  return <Sort setSortBy={setSortBy} sortBy={sortBy} />;
};

export const Default = Template.bind({});
