import Pagination from "@mui/material/Pagination";

import { ChangeEvent } from "react";
import { setPage } from "../../../RTK/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../../RTK/store";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const PaginationRanges = () => {
  const dispatch = useAppDispatch();

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  const pagesCount = useAppSelector((state) => state.filmsReducer.pagesCount);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF4500',
      }
    },
  });

  


  return (
    <ThemeProvider theme={theme}>
    <Pagination
      size="large"
      count={pagesCount}
      siblingCount={1}
      color="primary"
      onChange={handlePageChange}
    />
    </ThemeProvider>
  );
};
