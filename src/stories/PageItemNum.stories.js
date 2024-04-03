import React, { useState, useEffect } from "react";
import PageItemNum from "../Components/Inputs/PageItemNum";

export default {
  title: "PageItemNum",
  component: PageItemNum,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
      description: "Number of items to display per page.",
    },
  },
};

const Template = (args) => {
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setPageSize(args.pageSize);
  }, [args.pageSize]);

  return <PageItemNum pageSize={pageSize} setPageSize={setPageSize} />;
};

export const Default = Template.bind({});
