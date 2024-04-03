import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PageItemNum from "../Components/Inputs/PageItemNum";

export default {
  title: "PageItemNum",
  component: PageItemNum,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This component displays a dropdown list for selecting the number of items to display per page.",
      },
    },
  },
  args: {
    pageSize: 10,
  },
  argTypes: {
    pageSize: {
      control: "select",
      options: [20, 30, 40, 50],
    },
  },
};

const Template = (args) => {
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setPageSize(args.pageSize);
  }, [args.pageSize]);

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
      <PageItemNum pageSize={pageSize} setPageSize={setPageSize} />
    </Box>
  );
};

export const Default = Template.bind({});
