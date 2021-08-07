import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../Models/movie';
import {DataService} from '../Service/data.service';
import {select, Store} from '@ngrx/store';
import {MovieState} from '../Store/Reducers/movie.reducers';
import {greater, movieSelector, movieUserSelector} from '../Store/Selectors/movie.selector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  // @Input()
  // movies: Movie[] = [];

  // movies name here should match the injected store module's reducer key
  // movies$ = this.store.select('movies');

  // movies$ = this.store.pipe(select(movieSelector));
  // movies$ = this.store.pipe(select(movieUserSelector));
  movies$ = this.store.pipe(select(greater(0)));

  constructor(private dataService: DataService, private store: Store<MovieState>) {
  }

  ngOnInit(): void {
  }
}
