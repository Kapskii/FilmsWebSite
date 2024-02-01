import Pagination from "@mui/material/Pagination";

import { ChangeEvent } from "react";
import { setPage } from "../../../RTK/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../../RTK/store";

export const PaginationRanges = () => {
  const dispatch = useAppDispatch();

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  const pagesCount = useAppSelector((state) => state.filmsReducer.pagesCount);

  return (
    <Pagination
      count={pagesCount}
      siblingCount={1}
      color="primary"
      onChange={handlePageChange}
    />
  );
};
