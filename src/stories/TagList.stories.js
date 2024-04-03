import React, { useState, useEffect } from "react";
import TagList from "../Components/TagList";
import { Box } from "@mui/material";

export default {
  title: "TagList",
  component: TagList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a component for displaying a list of tags with pagination.",
      },
    },
  },
  args: {
    items: Array.from({ length: 10 }, (v, i) => ({
      name: `tag${i + 1}`,
      count: (i + 1) * 10,
    })),
    page: 1,
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
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const allItems = Array.from({ length: 100 }, (v, i) => ({
    name: `tag${i + 1}`,
    count: (i + 1) * 10,
  }));

  const items = allItems.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage(args.page);
    setPageSize(args.pageSize);
  }, [args.page, args.pageSize]);

  return (
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "#f5f5f5",
        flexDirection: "column",
        pt: 2,
        px: 2,
      }}
    >
      <TagList
        {...args}
        items={items}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        hasMore={allItems.length > page * pageSize}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  page: 1,
  pageSize: 10,
};
