import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../RTK/store";
import { fetchFilms, fetchSearch } from "../../../RTK/filmsSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.filmsReducer.currentPage);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const searchHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputValue === ""
      ? dispatch(fetchFilms(page))
      : dispatch(fetchSearch(inputValue));
    setInputValue("");
  };

  return (
    <header className={s.header}>
      <h1 className={s.header_title}>
        <NavLink to={"/"}>
          Movie<p>Flix</p>
        </NavLink>
      </h1>
      <ul>
        <li className={s.header_navItem}>
          <NavLink to={"/news"}>News</NavLink>
        </li>
      </ul>
      <form onSubmit={searchHandler} className={s.header_searchForm}>
        <input
          className={s.header_searchElement}
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
        <button className={s.header_searchButton}>Поиск</button>
      </form>
    </header>
  );
};
