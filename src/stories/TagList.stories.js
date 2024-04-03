import React, { useState, useEffect } from "react";
import TagList from "../Components/TagList";

export default {
  title: "TagList",
  component: TagList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "TagList component is used to display a list of tags with pagination. It supports different states such as idle, loading, and succeeded. It also handles errors and displays an error message when an error occurs.",
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
    status: "idle",
    error: false,
    errorText: "HTTP error! status: 400",
  },
  argTypes: {
    pageSize: {
      control: "select",
      options: [20, 30, 40, 50],
    },
    status: {
      control: "select",
      options: ["idle", "loading", "succeeded"],
    },
    items: { control: "object" },
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
    <TagList
      {...args}
      items={items}
      page={page}
      setPage={setPage}
      pageSize={pageSize}
      setPageSize={setPageSize}
      hasMore={allItems.length > page * pageSize}
      isLoading={args.isLoading}
      error={args.error && args.errorText}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  page: 1,
  pageSize: 10,
};
