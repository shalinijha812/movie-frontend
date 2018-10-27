import { IMovie } from './../../movieI';
import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import { SearchServiceService } from '../../search-service.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private movie1Service :SearchServiceService,private router :Router) { }

  id:number;
  title:string;
  public movie:IMovie;
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id=params['id'];
      this.title=params['title'];
    })
  }
  upda="";
  updatingMovie(){
    
    this.movie1Service.findMovie(this.title).subscribe(data=>{
      this.movie=data;
      console.log(this.movie);
    this.movie.comments=this.upda;
    this.movie1Service.updateMovie(this.id,this.movie.comments).subscribe(data=>{
      console.log("updated ");
      this.router.navigate(['/wishlist']);
    })
      
    })
    
    
    

  }

}
