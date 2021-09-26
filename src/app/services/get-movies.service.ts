import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { MovieArray } from '../models/movie-array';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private _HttpClient: HttpClient) { }

  getMovies(): Promise<MovieArray>{

    let headers = new HttpHeaders();

    let url = 'https://assets-aivo.s3.amazonaws.com/movies.json';

    return this._HttpClient
      .get(url, {headers:headers}).toPromise().then((response: any) => {
        return response;
      })
      .catch((error) => {
        return observableThrowError(error);
      });
  
  }

}

