import { ChangeEvent, useEffect } from "react";
import { MovieList } from "./movie-list/MovieList";
import { PaginationRanges } from "../pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../RTK/store";
import { fetchFilms, fetchSearch, setPage } from "../../../RTK/filmsSlice";
import s from "./movies.module.css";
import { Loader } from "../loader/Loader";

export const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.filmsReducer.films);
  const loader = useAppSelector((state) => state.filmsReducer.loader);
  const page = useAppSelector((state) => state.filmsReducer.currentPage);
  const pagesCount = useAppSelector((state) => state.filmsReducer.pagesCount);

  const moviesPageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  useEffect(() => {
    dispatch(fetchFilms(page));
  }, [page]);

  return (
    <div className={s.movies_wrapper}>
      <div className={s.movies}>
        {loader ? (
          <Loader />
        ) : (
          movies.map((film, id) => <MovieList film={film} key={id} />)
        )}
      </div>
      <div className={s.pagination}>
        <PaginationRanges pagesCount={pagesCount} callBack={moviesPageChange} />
      </div>
    </div>
  );
};
