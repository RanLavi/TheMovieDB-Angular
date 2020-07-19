import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie, getAll } from '../store/actions/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'movies';
  constructor(private store: Store<{ movieList: Movie[]; }>) {
  }

  ngOnInit() {
    this.store.dispatch(getAll());
  }
}