import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filmsAPI } from "../api/filmsAPI";
import {
  FilmInfoType,
  FilmPageType,
  StaffType,
  VideoType,
} from "../types/types";

type FilmsSliceType = {
  films: FilmInfoType[];
  film: FilmPageType;
  search: FilmInfoType[];
  video: VideoType;
  staff: StaffType[];
  loader: boolean;
  pagesCount: number;
  currentPage: number;
};

const initialState: FilmsSliceType = {
  films: [],
  film: {} as FilmPageType,
  search: [],
  video: {} as VideoType,
  staff: [],
  loader: false,
  pagesCount: 0,
  currentPage: 1,
};

export const fetchFilms = createAsyncThunk(
  "fetchFilms",
  async (pageNumber: number) => {
    const response = await filmsAPI.getFilms(pageNumber);
    return response.data;
  }
);

export const fetchFilm = createAsyncThunk(
  "fetchFilm",
  async (idMovie: number) => {
    const response = await filmsAPI.getFilm(idMovie);
    return response.data;
  }
);



export const fetchSearch = createAsyncThunk(
  "fetchSearch",
  async (name: string) => {
  
    const response = await filmsAPI.getSearch(name);
    return response.data;
  }
);

export const fetchStaff = createAsyncThunk(
  "fetchStaff",
  async (idMovie: number) => {
    const response = await filmsAPI.getStaff(idMovie);
    return response.data;
  }
);

export const fetchVideo = createAsyncThunk(
  "fetchVideo",
  async (idVideo: number) => {
    const response = await filmsAPI.getVideo(idVideo);
    return response.data.items[2];
  }
);

export const filmsSlice = createSlice({
  name: "filmsReducer",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    clearFilmData(state) {
      state.film = {} as FilmPageType;
      state.staff = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.items;
      state.pagesCount = action.payload.totalPages;
      state.loader = false;
    });
    builder.addCase(fetchFilms.pending, (state, _) => {
      state.loader = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.films = action.payload.films;
      state.pagesCount = action.payload.pagesCount;
      state.loader = false;
    });
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload;
      state.loader = false;
    });
    builder.addCase(fetchFilm.pending, (state, _) => {
      state.loader = true;
    });
    builder.addCase(fetchStaff.fulfilled, (state, action) => {
      state.staff = action.payload;
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.video = action.payload;
    });
  },
});

export const { setPage, clearFilmData } = filmsSlice.actions;
