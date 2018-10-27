import { SearchServiceService } from './../../../search-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: SearchServiceService) { }
  movies=[];
  public url = "https://api.themoviedb.org/3/movie/upcoming?api_key=04008b7a54e14b1890c6aba85bde3664&query="
  ngOnInit() {
    this.movieService.getMovies(this.url).subscribe(data => {
      this.movies = data.results;
    })

}
}
