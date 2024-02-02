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

export type NewsInfoType = {
  kinopoiskId: number;
  imageUrl: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
};
