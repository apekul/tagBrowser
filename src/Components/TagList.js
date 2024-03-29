import React, { useState } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import PageItemNum from "./Inputs/PageItemNum";

const TagList = ({ data }) => {
  const [pageItems, setPageItems] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * pageItems;
  const endIndex = startIndex + pageItems;
  const itemsOnPage = data.items.slice(startIndex, endIndex);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        pb: 1,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }}>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PageItemNum pageItems={pageItems} setPageItems={setPageItems} />
        </Box>
        {itemsOnPage.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 1,
              m: 1,
              borderRadius: 1,
              border: "1px solid grey",
              display: "inline-block",
            }}
          >
            <Typography variant="body1">
              {item.name} ({item.count} posts)
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Pagination */}
      <Pagination
        count={Math.ceil(data.items.length / pageItems)}
        color="primary"
        sx={{ mt: 2, alignSelf: "center" }}
        onChange={handleChange}
        page={currentPage}
      />
    </Box>
  );
};

export default TagList;
