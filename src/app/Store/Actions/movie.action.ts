import {createAction, props} from '@ngrx/store';
import {Movie} from '../../Models/movie';

// GET MOVIE ACTIONS
export const getMovies = createAction('[Movie] Get movie');
export const getMoviesSuccess = createAction('[Movie] Get movie success',
  // Using ({object}) to pick the required key from dataset
  (movies: ReadonlyArray<Movie>) => ({movies}),
  // props<{ movies: ReadonlyArray<Movie> }>()
);

// GET ADD MOVIE ACTIONS
export const addMovies = createAction(
  '[Movie] Add movie',
  (movie: Movie) => ({movie})
  // props<{ movie: Movie }>()
);
export const addMoviesSuccess = createAction(
  '[Movie] Add movie success',
  // props<{ movie: Movie }>(),
  (movie: Movie) => ({movie})
);

// USER STATE ACTIONS
export const assignUser = createAction(
  '[User] Assign user',
  (user: string) => ({user}),
);
