import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

export default {
  title: "Inname Input",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component displays a text input for entering a name to search for.",
      },
    },
  },
  args: {
    inname: "",
  },
};

const Template = (args) => {
  const [inname, setInname] = useState(args.inname);

  useEffect(() => {
    setInname(args.inname);
  }, [args.inname]);

  const handleSetInname = (event) => {
    setInname(event.target.value);
  };

  return (
    <TextField
      value={inname}
      onChange={handleSetInname}
      id="outlined-basic"
      label="inname"
      variant="outlined"
      fullWidth
      sx={{ width: 220 }}
    />
  );
};

export const Default = Template.bind({});
