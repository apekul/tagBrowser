import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";

export default {
  title: "Paggination",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "This is a component for displaying pagination controls.",
      },
    },
  },
  args: {
    page: 1,
  },
};

const Template = (args) => {
  const [page, setPage] = useState(1);
  const hasMore = true;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(args.page);
  }, [args.page]);

  return (
    <Pagination
      count={hasMore ? page + 1 : page}
      color="primary"
      sx={{ mt: 2 }}
      onChange={handleChange}
      page={page}
    />
  );
};

export const Default = Template.bind({});
