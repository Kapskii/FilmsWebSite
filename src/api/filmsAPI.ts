import { instance } from "../common/Constants/instance";


export const filmsAPI = {
  getFilms(page: number) {
    return instance.get(`v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${page}`
    );
  },
  getFilm(id: number) {
    return instance.get(`v2.2/films/${id}`);
  },
  getStaff(id: number) {
    return instance.get(`v1/staff?filmId=${id}`)
  },
  getVideo(id: number) {
    return instance.get(`v2.2/films/${id}/videos`)
  },
  getSearch(name: string) {
    return instance.get(`v2.1/films/search-by-keyword?keyword=${name}&page=1`)
  }
};


