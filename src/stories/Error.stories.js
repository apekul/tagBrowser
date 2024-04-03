import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Alert } from "@mui/material";

export default {
  title: "Status Display",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Status Display component is used to visually represent different states of a process, such as loading, success, and error. It displays a circular progress indicator during loading, shows a success alert when an operation is successful, and shows an error alert with a custom message when an error occurs.",
      },
    },
  },
  args: {
    status: "idle",
    error: false,
    errorText: "HTTP error! status: 400",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["idle", "loading", "succeeded"],
    },
  },
};

const Template = (args) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { status, error } = args;

  useEffect(() => {
    status === "succeeded" ? setShowSuccess(true) : setShowSuccess(false);
  }, [status, error]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {status === "loading" && <CircularProgress />}
      {showSuccess && <Alert severity="success">Operation successful</Alert>}
      {error && <Alert severity="error">{args.errorText}</Alert>}
    </Box>
  );
};

export const Loading = Template.bind({});
Loading.args = {
  status: "loading",
  error: false,
};
Loading.parameters = {
  docs: {
    storyDescription:
      "This story demonstrates the component in a loading state. The circular progress indicator is displayed.",
  },
};

export const Success = Template.bind({});
Success.args = {
  status: "succeeded",
  error: false,
};
Success.parameters = {
  docs: {
    storyDescription:
      "This story demonstrates the component in a success state. An alert with a success message is displayed.",
  },
};

export const Error = Template.bind({});
Error.args = {
  status: "idle",
  error: true,
  errorText: "HTTP error! status: 400",
};
Error.parameters = {
  docs: {
    storyDescription:
      "This story demonstrates the component in an error state. An alert with an error message is displayed.",
  },
};
