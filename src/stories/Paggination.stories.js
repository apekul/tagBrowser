import React, { useState, useEffect } from "react";
import { Pagination, Box } from "@mui/material";

export default {
  title: "Paggination",
  tags: ["autodocs"],
  parameters: {
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      position="absolute"
      top="0"
      left="0"
    >
      <Pagination
        count={hasMore ? page + 1 : page}
        color="primary"
        sx={{ mt: 2 }}
        onChange={handleChange}
        page={page}
      />
    </Box>
  );
};

export const Default = Template.bind({});
