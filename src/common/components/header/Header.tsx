import { NavLink } from "react-router-dom";
import s from './header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <h1>
        <NavLink to={"/"}>
          Main
        </NavLink>
      </h1>
    </header>
  );
};
