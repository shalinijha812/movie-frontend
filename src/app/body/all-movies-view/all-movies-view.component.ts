import { IMovie } from './../../movieI';
import { Router } from '@angular/router';
import { SearchServiceService } from './../../search-service.service';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-all-movies-view',
  templateUrl: './all-movies-view.component.html',
  styleUrls: ['./all-movies-view.component.css']
})
export class AllMoviesViewComponent implements OnInit {
  movies;
  // @Input('moviesSendToDisplay') movies;
  constructor(private service:SearchServiceService,private router: Router) {
    
   }

  ngOnInit() {
    this.service.getAllMovie().subscribe(data=>{
    this.movies=data;
  })
  }
  delete(id:number){
    this.service.deleteMovie(id).subscribe(data=>{
      // console.log("deleted it ");
      this.router.navigate(["/wishlist"]);
      
    })
  }
 
  updateM(id:Number,title:string)
  {
    this.router.navigate(['update',id,title]);
  }

}
