import { useNavigate, useParams } from "react-router-dom";
import s from "./moviePage.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../RTK/store";
import { clearFilmData, fetchFilm } from "../../../../RTK/filmsSlice";
import { Loader } from "../../loader/Loader";

export const MoviePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.filmsReducer.film);
  const loading = useAppSelector((state) => state.filmsReducer.loader);

  console.log(movie);

  const param = useParams();

  useEffect(() => {
    if (param.id) {
      dispatch(fetchFilm(+param.id));
    } else {
      navigate("/");
    }
    return () => {
      dispatch(clearFilmData());
    };
  }, [param, navigate]);

  return (
    <div className={s.main}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className={s.cover}>
            <img className={s.cover_image} src={movie.posterUrl} alt="cover" />
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
