import { useParams } from "react-router-dom";
import s from "./moviePage.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../RTK/store";
import {
  clearFilmData,
  fetchFilm,
  fetchStaff,
  fetchVideo,
} from "../../../../RTK/filmsSlice";
import { Loader } from "../../loader/Loader";
import { StaffCard } from "../staff/StaffCard";

export const MoviePage = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.filmsReducer.film);
  const loading = useAppSelector((state) => state.filmsReducer.loader);
  const staff = useAppSelector((state) => state.filmsReducer.staff);
  const trailer = useAppSelector((state) => state.filmsReducer.video);

  const param = useParams();

  useEffect(() => {
    if (param.id) {
      dispatch(fetchFilm(+param.id));
      dispatch(fetchStaff(+param.id));
      dispatch(fetchVideo(+param.id));
    }
    return () => {
      dispatch(clearFilmData());
    };
  }, [param]);

  return (
    <div className={s.main}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={s.cover}>
            <img className={s.cover_image} src={movie.posterUrl} alt="cover" />
            <div className={s.overlay}></div>
          </div>
          <div className={s.moviesInfo}>
            <article className={s.moviesInfo_descriptionBlock}>
              <h1 className={s.moviesInfo_descriptionBlock_Title}>
                {movie.nameRu}
              </h1>
              <div className={s.moviesInfo_descriptionBlock_options}>
                <span className={s.moviesInfo_rating}>
                  KP: {movie.ratingKinopoisk ? movie.ratingKinopoisk : "-"}
                </span>
                <p>{movie.year},</p>
                <p>{movie.filmLength} мин.</p>
              </div>

              <p className={s.moviesInfo_descriptionBlock_Description}>
                {movie.description}
              </p>
            </article>
            <div className={s.staff_block}>
              {staff.map((person, id) => (
                <StaffCard person={person} key={id} />
              ))}
            </div>
            <a
              className={s.moviesInfo_buttonWatch}
              href={movie.webUrl}
              target="_blanck"
            >
              Смотреть
            </a>
          </div>
        </>
      )}
    </div>
  );
};
