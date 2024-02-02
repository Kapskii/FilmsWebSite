import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsInfoType } from "../types/types";
import { newsAPI } from "../api/newsAPI";

type NewsSliceType = {
  news: NewsInfoType[];
  currentPage: number;
  loader: boolean;
  totalPages: number
};

const initialState: NewsSliceType = {
  news: [],
  currentPage: 1,
  loader: false,
  totalPages: 0,
};

export const fetchNews = createAsyncThunk("fetchNews", async (page: number, _) => {
  const response = await newsAPI.getNews(page);
  return {...response.data, page};
});

export const newsSlice = createSlice({
  name: "newsReduser",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload.items;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.page;
      state.loader = false;
    });
    builder.addCase(fetchNews.pending, (state, _) => {
      state.loader = true;
    });
  },
});

export const { setPage } = newsSlice.actions;
