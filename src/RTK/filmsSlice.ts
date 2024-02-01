import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filmsAPI } from "../api/filmsAPI";
import { FilmInfoType, FilmPageType } from "../types/types";

type FilmsSliceType = {
  films: FilmInfoType[];
  film: FilmPageType
  loader: boolean;
  pagesCount: number
  currentPage: number
};

const initialState: FilmsSliceType = {
  films: [],
  film: {} as FilmPageType,
  loader: false,
  pagesCount: 0,
  currentPage: 1,
};

export const fetchFilms = createAsyncThunk("fetchFilms", async (pageNumber: number, thunkAPI) => {
  const response = await filmsAPI.getFilms(pageNumber);
  return response.data;
});

export const fetchFilm = createAsyncThunk("fetchFilm", async (idMovie: number, thunkAPI) => {
  const response = await filmsAPI.getFilm(idMovie);
  return response.data;
});

export const filmsSlice = createSlice({
  name: "filmsReducer",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    clearFilmData(state) {
      state.film = {} as FilmPageType
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.items;
      state.pagesCount = action.payload.totalPages;
      state.loader = false;
    });
    builder.addCase(fetchFilms.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload
      
    })
  },
});

export const {setPage, clearFilmData} = filmsSlice.actions
