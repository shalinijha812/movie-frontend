import { SearchServiceService } from './../../../search-service.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-smart',
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.css']
})
export class SearchSmartComponent implements OnInit {
  // childToParentData:string;
  // query="";

  // movieList={results:[{title:""}]};

  // errorMsg;
  // @Output() sendToHeader =new EventEmitter<string>();
  // onReceiving(queryFromChild:string){
  //   this.query=queryFromChild;

  //   this.sendToHeader.emit(this.movieList);
  //   //console.log(this.query);
  //   //this.router.navigate(['/search',this.query]);

  //     console.log(this.movieList);
  // }
  // ngAfterViewChecked(){
  //   this.searchService.getMovies(this.query)
  //     .subscribe(data=>this.movieList=data,
  //     error=>this.errorMsg=error);
  // }
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

  ngOnInit() {
  }

}
