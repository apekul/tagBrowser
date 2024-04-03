import React, { useEffect, useState } from "react";
import FilterSortControls from "./Components/FilterSortControls";
import TagList from "./Components/TagList";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);
  const hasMore = useSelector((state) => state.data.hasMore);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [inname, setInname] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [sortBy, setSortBy] = useState("popular");
  const [order, setOrder] = useState("desc");
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  const dateToUnixTimestamp = (date) => {
    return date instanceof Date ? Math.floor(date.getTime() / 1000) : null;
  };

  const handleSearch = () => {
    const searchParams = {
      fromDate: dateToUnixTimestamp(fromDate),
      toDate: dateToUnixTimestamp(toDate),
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
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
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
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

      <TagList
        items={items}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        hasMore={hasMore}
        error={error}
        status={status}
      />
    </Box>
  );
}

export default App;
