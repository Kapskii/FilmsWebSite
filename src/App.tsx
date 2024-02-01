import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./common/components/header/Header";
import { Movies } from "./common/components/movies/Movies";
import { MoviePage } from "./common/components/movies/moviePage/MoviePage";
import { ErrorPage } from "./common/components/errorPage/ErrorPage";

export const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="main">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="moviePage/:id" element={<MoviePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
    </div>
  );
};
