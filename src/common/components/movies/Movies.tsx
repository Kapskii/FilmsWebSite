import { useEffect } from "react";
import { Movie } from "./movie-list/Movie-list";
import { PaginationRanges } from "../pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../RTK/store";
import { fetchFilms } from "../../../RTK/filmsSlice";
import s from "./movies.module.css";
import { Loader } from "../loader/Loader";


export const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.filmsReducer.films);
  const loader = useAppSelector((state) => state.filmsReducer.loader);
  const page = useAppSelector((state) => state.filmsReducer.currentPage);

  useEffect(() => {
    dispatch(fetchFilms(page));
  }, [page]);

  return (
    <div className={s.movies_wrapper}>
      <div className={s.movies}>
        {loader ? (<Loader/>) : (movies.map((film, id) => <Movie film={film} key={id} />))}
      </div>
      <div className={s.pagination}>
        <PaginationRanges />
      </div>
    </div>
  );
};