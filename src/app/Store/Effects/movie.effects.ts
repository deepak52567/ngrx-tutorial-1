// Receive all actions, react on it and returns another action

import {DataService} from '../../Service/data.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addMovies, addMoviesSuccess, getMovies, getMoviesSuccess} from '../Actions/movie.action';
import {catchError, concatMap, exhaustMap, map, tap} from 'rxjs/operators';
import {EmptyError} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MovieEffects {

  loadMovie$ = createEffect(() => this.actions$.pipe(
    ofType(getMovies),
    exhaustMap(() => this.dataService.getMovies().pipe(
      map(movies => getMoviesSuccess(movies)),
      catchError(() => EmptyError)
    ))
  ));

  addMovie$ = createEffect(() => this.actions$.pipe(
    ofType(addMovies),
    tap((movie) => console.log(movie)),
    concatMap(({movie}) => this.dataService.addMovies(movie).pipe(
      map((newMovie) => addMoviesSuccess(newMovie)),
      catchError(() => EmptyError)
    ))
  ));

  // Add dispatch set to false to avoid server response

  constructor(private dataService: DataService, private actions$: Actions) {
  }

}
