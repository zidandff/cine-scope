export type Review = {
  id: number;
  movieId: number;
  rating: number;
  review: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    movieId: 1,
    rating: 4.7,
    review: "Absolute cinema",
  },
];
