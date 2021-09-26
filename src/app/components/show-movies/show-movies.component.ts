import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.sass']
})
export class ShowMoviesComponent implements OnInit {

  moviesArray: Array<Movie>;
  sortedMoviesArray: Array<Movie>;
  yearArray: Array<number>;
  loadingMovies: boolean = false;
  selectedYear: number = null;
  selectedType: string = null;

  constructor(private _GetMoviesService: GetMoviesService) { }

  async ngOnInit() {
    // Progress bar
    this.loadingMovies = true;

    // Llama a la API
    let res = await this._GetMoviesService.getMovies();
    this.moviesArray = res.entries;

    // Asigna los datos a un arreglo nuevo
    this.sortedMoviesArray = this.moviesArray.slice();

    // Prepara filtro por año
    this.prepareYearFilter();

    this.loadingMovies = false;
  }

  sortData(sort: Sort) {
    const data = this.sortedMoviesArray.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedMoviesArray = data;
      return;
    }

    this.sortedMoviesArray = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'year': return compare(a.releaseYear, b.releaseYear, isAsc);
        default: return 0;
      }
    });
  }

  prepareYearFilter() {
    this.yearArray = this.sortedMoviesArray.reduce(function(a,b){
      if (a.indexOf(b.releaseYear) < 0 ) {
        a.push(b.releaseYear);
      }
      return a;
    },[]);
    this.yearArray = this.yearArray.sort();
  }

  changeFilters() {
    // Limpia el filtro
    this.sortedMoviesArray = this.moviesArray.slice();

    // Si hay filtro de año
    if(this.selectedYear !== null) {
      for (let i = 0; i < this.sortedMoviesArray.length; i++) {
        const element = this.sortedMoviesArray[i];
        if(element.releaseYear !== this.selectedYear) {
            this.sortedMoviesArray.splice(i, 1);
            i--;
          }
        }
      } 
      
    // Si hay filtro de tipo
    if(this.selectedType !== null) {
      for (let i = 0; i < this.sortedMoviesArray.length; i++) {
        const element = this.sortedMoviesArray[i];
        if(element.programType !== this.selectedType) {
            this.sortedMoviesArray.splice(i, 1);
            i--;
        }
      }
    } 

  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

