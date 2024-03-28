import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const TagList = ({ data }) => {
  return (
    <div>
      <h2>List</h2>
      <p>how many items to display</p>
      {data.items.map((item, index) => (
        <p key={index}>
          {item.name} {item.count} posts
        </p>
      ))}
      {/* Paggination */}
      <Pagination count={10} color="primary" />
    </div>
  );
};

export default TagList;
