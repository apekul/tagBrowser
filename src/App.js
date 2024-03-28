import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import TagList from "./Components/TagList";
import { Box, Typography, Container } from "@mui/material";
// https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow
function App() {
  const data = {
    items: [
      {
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
        count: 2528547,
        name: "javascript",
      },
      {
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
        count: 2191724,
        name: "python",
      },
    ],
    has_more: true,
    quota_max: 10000,
    quota_remaining: 9963,
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        height: "100vh",
        marginX: "25em",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Tag browser
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Navigation />
      </Box>
      <TagList data={data} />
    </Box>
  );
}

export default App;
