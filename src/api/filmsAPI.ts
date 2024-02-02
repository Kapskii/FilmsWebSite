import { instance } from "../common/Constants/instance";


export const filmsAPI = {
  getFilms(page: number) {
    return instance.get(`v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${page}`
    );
  },
  getFilm(id: number) {
    return instance.get(`v2.2/films/${id}`);
  },
};


