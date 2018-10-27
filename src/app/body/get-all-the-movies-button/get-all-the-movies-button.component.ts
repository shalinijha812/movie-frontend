import { IMovie } from './../../movieI';
import { SearchServiceService } from './../../search-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-the-movies-button',
  templateUrl: './get-all-the-movies-button.component.html',
  styleUrls: ['./get-all-the-movies-button.component.css']
})
export class GetAllTheMoviesButtonComponent implements OnInit {

  constructor(private router: Router,private _service: SearchServiceService) { }

  ngOnInit() {
  }
  movies;
  onClick(){
    this._service.getAllMovie().subscribe(data=>{
      this.movies=data;
      console.log(this.movies);
      this.router.navigate(["/wishlist"]);

    })
    movieToBeDeleted:IMovie;
    // delete(this.movies.results[0].id){
    //   this._service.deleteMovie(id).subscribe(data=>{
    //     this.movies=data;


    // }
    
  }
 
  
}
