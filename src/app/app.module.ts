import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './store/reducer/movies.reducer';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './components/app.component';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects/movies.effects';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ movieList: moviesReducer }),
    EffectsModule.forRoot([MoviesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
