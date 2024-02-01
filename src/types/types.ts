export type FilmInfoType = {
  id: number;
  kinopoiskId: number;
  nameRu: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk: number;
  year: number;
};

export type FilmPageType = {
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  description: string;
};
