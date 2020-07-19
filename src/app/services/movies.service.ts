import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllSuccess, Movie } from '../store/actions/movies.actions';
import { Observable, concat } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor (private http: HttpClient) {}
  
    getAll(): Observable<any> {
        const API_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=9cdac80be2c1e1a848e45e7dfc1aca4a&page=';
        return concat(
          this.http.get(API_URL+'1'),
          this.http.get(API_URL+'2'),
          this.http.get(API_URL+'3')
        )
    }
  }