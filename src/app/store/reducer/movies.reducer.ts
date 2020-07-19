import { createReducer, on } from '@ngrx/store';
import { getAllSuccess, Movie } from '../actions/movies.actions';

export const initialState: Movie[] = []

const _moviesReducer = createReducer(initialState,
	on(getAllSuccess, (state, { movieList }) => (state.concat(movieList) )),
);

export function moviesReducer(state, action) {
	return _moviesReducer(state, action);
}
