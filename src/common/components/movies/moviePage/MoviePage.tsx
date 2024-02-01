import { useNavigate, useParams } from "react-router-dom";
import s from "./moviePage.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../RTK/store";
import { clearFilmData, fetchFilm } from "../../../../RTK/filmsSlice";

export const MoviePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.filmsReducer.film);

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
      <div className={s.cover}>
        <img src={movie.posterUrlPreview} alt="cover" />
      </div>
      <h1>{movie.nameRu}</h1>
      <h4>{movie.description}</h4>
      <p>{movie.year}</p>
      <a href={movie.webUrl} target="_blanck">
        Смотреть
      </a>
    </div>
  );
};
