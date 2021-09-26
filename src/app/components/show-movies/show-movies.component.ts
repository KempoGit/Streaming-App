import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.sass']
})
export class ShowMoviesComponent implements OnInit {

  moviesArray: Array<Movie>;
  loadingMovies: boolean = false;

  constructor(private _GetMoviesService: GetMoviesService) { }

  async ngOnInit() {
    this.loadingMovies = true;
    let res = await this._GetMoviesService.getMovies();
    this.moviesArray = res.entries;
    this.loadingMovies = false;
  }

}
