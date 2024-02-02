import { NavLink } from "react-router-dom";
import s from "./movieList.module.css";
import { FilmInfoType } from "../../../../types/types";

type PropsType = {
  film: FilmInfoType;
};

export const MovieList = (props: PropsType) => {
  const { film } = props;

  return (
    <NavLink to={`moviePage/${film.kinopoiskId}`}>
      <div className={s.movie_card}>
        <div className={s.movie_cardInform}>
          <div className={s.movie_cardTitleYear}>
          <h3 className={s.movie_cardTitle}>
            {film.nameRu}
          </h3>
          <span className={s.movie_cardYear}>({film.year})</span>
          </div>
          <span className={s.movie_cardRating}>
            KP: {film.ratingKinopoisk > 0 ? film.ratingKinopoisk : "-"}
          </span>
        </div>
        <img className={s.movie_cardPoster} src={film.posterUrl}></img>
      </div>
    </NavLink>
  );
};
