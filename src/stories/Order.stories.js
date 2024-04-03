import React, { useState, useEffect } from "react";
import Order from "../Components/Inputs/Order";

export default {
  title: "Order",
  component: Order,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component displays a dropdown for sorting in ascending or descending order.",
      },
    },
  },
  args: {
    order: "desc",
  },
  argTypes: {
    order: {
      control: "select",
      options: ["desc", "asc"],
      description: "Order to sort by.",
    },
  },
};

const Template = (args) => {
  const [order, setOrder] = useState(args.order);

  useEffect(() => {
    setOrder(args.order);
  }, [args.order]);

  return <Order setOrder={setOrder} order={order} />;
};

export const Default = Template.bind({});
