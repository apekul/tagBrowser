import React from "react";
import { Button } from "@mui/material";
import { action } from "@storybook/addon-actions";

export default {
  title: "Search Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "This is a button used for initiating a search action.",
      },
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => (
  <Button variant="contained" {...args}>
    Search
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  onClick: action("Search Button Clicked"),
};
