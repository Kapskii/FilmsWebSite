import { NavLink } from "react-router-dom";
import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header_title}>
        <NavLink to={"/"}>Movie<p>Flix</p></NavLink>
      </h1>
      <ul>
        <li className={s.header_navItem}>
          <NavLink to={"/news"}>News</NavLink>
        </li>
      </ul>
      <input className={s.header_searchElement} type="text" />
    </header>
  );
};
