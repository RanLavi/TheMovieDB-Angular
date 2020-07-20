import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movieOverview: string;
  @Input() movieReleaseDate: string;
  @Input() movieVoteAverage: number;
  @Input() moviePosterPath: string;
  constructor() { }

  ngOnInit(): void {
  }

}
