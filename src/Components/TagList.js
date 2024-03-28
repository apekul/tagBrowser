import React from "react";
import { Box, Typography, Pagination } from "@mui/material";
const TagList = ({ data }) => {
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
        <Typography variant="subtitle1" gutterBottom>
          How many items to display selection
        </Typography>
        {data.items.map((item, index) => (
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
        count={10}
        color="primary"
        sx={{ mt: 2, alignSelf: "center" }}
      />
    </Box>
  );
};

export default TagList;
