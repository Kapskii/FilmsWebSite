import { instance } from "../common/Constants/instance";

export const newsAPI = {
  getNews(page: number) {
    return instance.get(`v1/media_posts?page=${page}`);
  },
};
