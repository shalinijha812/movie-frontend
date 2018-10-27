import { IMovie } from './../../../movieI';
import { SearchServiceService } from './../../../search-service.service';


import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//import { Router } from '@angular/router';

@Component({
  selector: 'app-search-smart',
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.css']
})
export class SearchSmartComponent implements OnInit {

  public movies = [];
  constructor(private searchService: SearchServiceService) { }
  movieName = 'Jack Reacher';
  errorMsg = '';
  query_url;
  recieveEvent($event) {
    this.movieName = $event;
    this.movieName = this.movieName.trim().replace(" ", "+");
    this.query_url = "https://api.themoviedb.org/3/search/movie?api_key=04008b7a54e14b1890c6aba85bde3664&query=" + this.movieName;
    this.setMovies();
  }
  setMovies() {
    this.searchService.getMovies(this.query_url).subscribe(data => {
      this.movies = data.results,
        error => this.errorMsg = error;
      console.log(this.movies);
    });

  }
  addMovie: IMovie;
  addToWishlist(movie) {
    this.addMovie = new IMovie();
    this.addMovie.id = movie.id;
    this.addMovie.language = movie.original_language;
    this.addMovie.comments = movie.overview;
    this.addMovie.title = movie.title;
    this.addMovie.poster_path = "https:/image.tmdb.org/t/p/w185/"+movie.poster_path;

    this.searchService.addMovie(this.addMovie).subscribe(data => {
      console.log("successfully added the movie to wishlist");
      //     this.router.navigate["/wishlist"];
    });

    }


    public urlinitial = "https://api.themoviedb.org/3/movie/upcoming?api_key=04008b7a54e14b1890c6aba85bde3664&query=";


    ngOnInit() {
      this.searchService.getMovies(this.urlinitial).subscribe(data => {
        this.movies = data.results;
      })



    }

  }
