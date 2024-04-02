import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// /2.3/tags?page=1&pagesize=1&fromdate=1712102400&todate=1712102400&order=desc&min=2&max=2&sort=popular&inname=1&site=stackoverflow
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (params, { getState }) => {
    const { isLoading } = getState().data;
    if (isLoading) {
      return;
    }
    try {
      const url = new URL("https://api.stackexchange.com/2.3/tags");
      const defaultParams = { site: "stackoverflow" };
      // Merge the defaultParams and params objects
      const mergedParams = { ...params, ...defaultParams };

      url.search = new URLSearchParams(mergedParams).toString();

      const response = await fetch(url);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { items: data.items, hasMore: data.has_more };
    } catch (error) {
      throw error;
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState: { items: [], hasMore: false, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
