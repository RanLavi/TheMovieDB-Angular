import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Movie } from '../../store/actions/movies.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movieList$: Observable<Movie[]>;
  constructor(private store: Store<{ movieList: Movie[]; }>) {
  this.movieList$ = store.pipe(select('movieList'));
}
}
