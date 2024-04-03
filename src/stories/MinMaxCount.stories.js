import React, { useState, useEffect } from "react";
import MinMaxCount from "../Components/Inputs/MinMaxCount";

export default {
  title: "MinMaxCount Input",
  component: MinMaxCount,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component displays two number inputs for filtering by a range of counts.",
      },
    },
  },
  args: {
    min: null,
    max: null,
  },
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
  },
};

const Template = (args) => {
  const [min, setMin] = useState(args.min);
  const [max, setMax] = useState(args.max);

  useEffect(() => {
    setMin(args.min);
    setMax(args.max);
  }, [args.min, args.max]);

  return <MinMaxCount min={min} setMin={setMin} max={max} setMax={setMax} />;
};

export const Default = Template.bind({});
