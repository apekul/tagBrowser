import React, { useEffect, useState } from "react";
import {
  Box,
  Pagination,
  Grid,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";
import PageItemNum from "./Inputs/PageItemNum";
import randomColor from "randomcolor";

const TagList = ({
  items,
  page,
  setPage,
  pageSize,
  setPageSize,
  hasMore,
  error,
  status,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [colors, setColors] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (status === "succeeded") {
      setShowSuccess(true);
      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  useEffect(() => {
    setColors(items.map(() => randomColor({ luminosity: "light" })));
  }, [items]);

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
      <Box>
        {/* Items per Page */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            my: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {status === "loading" && <CircularProgress />}
            {showSuccess && (
              <Alert severity="success">Operation successful</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </Box>
          <PageItemNum pageSize={pageSize} setPageSize={setPageSize} />
        </Box>
        {/* item list */}
        <Grid container spacing={1}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ListItem
                sx={{
                  borderRadius: 1,
                  border: "1px solid grey",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors[index],
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <ListItemText primary={`${item.name} (${item.count} posts)`} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pagination */}
      <Pagination
        count={hasMore ? page + 1 : page}
        color="primary"
        sx={{ mt: 2, alignSelf: "center" }}
        onChange={handleChange}
        page={page}
      />
    </Box>
  );
};

export default TagList;
