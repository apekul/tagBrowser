import React, { useEffect, useState } from "react";
import FilterSortControls from "./Components/FilterSortControls";
import TagList from "./Components/TagList";
import { Box, CircularProgress, Alert, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/dataSlice";
// import PageItemNum from "./Components/Inputs/PageItemNum";
function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const hasMore = useSelector((state) => state.data.hasMore);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [inname, setInname] = useState("");
  const [dateRange, setDateRange] = useState({ fromDate: null, toDate: null });
  const [sortBy, setSortBy] = useState("popular");
  const [order, setOrder] = useState("desc");
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  const handleSearch = () => {
    const searchParams = {
      fromDate: dateRange.fromDate,
      toDate: dateRange.toDate,
      order: order,
      min: min,
      max: max,
      sort: sortBy,
      inname: inname,
    };
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(
        ([key, value]) => value !== null && value !== undefined
      )
    );
    dispatch(fetchData({ page, pageSize, ...filteredParams }));
  };

  useEffect(() => {
    handleSearch();
  }, [page, pageSize]);

  // if (status === "loading") {
  //   return <CircularProgress />;
  // }

  // if (status === "failed") {
  //   return <Alert severity="error">{error}</Alert>;
  // }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        height: "100vh",
        marginX: {
          xs: "1em",
          sm: "2em",
          md: "3em",
          lg: "4em",
          xl: "20em",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <FilterSortControls
          handleSearch={handleSearch}
          inName={inname}
          setInname={setInname}
          dateRange={dateRange}
          setDateRange={setDateRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 2,
            mx: 2,
            mb: 1,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {status === "loading" && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
          </Box>
          {/* <PageItemNum pageSize={pageSize} setPageSize={setPageSize} /> */}
        </Box>
      </Box>
      <TagList
        items={items}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        hasMore={hasMore}
      />
    </Box>
  );
}

export default App;
