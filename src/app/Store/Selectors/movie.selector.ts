import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MovieState} from '../Reducers/movie.reducers';
import {Movie} from '../../Models/movie';

// YOU CAN USE THIS APPROACH OR
// const featureSelector = createFeatureSelector<MovieState>('movies');
// export const movieSelector = createSelector(
//   featureSelector,
//   (movies: MovieState) => movies
// );

// OR USE THIS
export const movieSelector = createSelector(
  (state: MovieState) => state.movies,
  (movies: ReadonlyArray<Movie>) => movies
);

export const movieUserSelector = createSelector(
  (state: MovieState) => state.movies,
  (state: MovieState) => state.user,
  (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
    return movies.filter((mv) => mv.userName === user);
  },
);

// METHOD TO PASS DATA IN BETWEEN THE FUNCTIONS
export const greater = (amount: number) => createSelector(movieSelector, (movies) => movies
  .filter((movie: Movie) => movie.earning >= amount)
);

// To release data from selector in case of large data
movieSelector.release();
