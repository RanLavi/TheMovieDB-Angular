import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../actions/movies.actions'; 


@Injectable()
export class MoviesEffects {
    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
      ) {}
      
  loadMovies$ = createEffect(() => 
  this.actions$.pipe(
    ofType('[Movie list] getAllMovies'),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map((rawData: {results: Movie[]}) => ({type: '[Movie list] getAllMovies success', movieList: rawData.results})),
        catchError(() => EMPTY)
      ))
    )
  );
 

}