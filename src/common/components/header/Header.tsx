import { NavLink } from "react-router-dom";
import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <NavLink to={"/"}>MovieFlix</NavLink>
      </h1>
      <input className={s.search_element} type="text" />
    </header>
  );
};
