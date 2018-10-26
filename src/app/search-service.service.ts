import { IMovie } from './movieI';
import { Observable, EMPTY, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
//   private _url:string="https://api.themoviedb.org/3/movie/550?api_key=04008b7a54e14b1890c6aba85bde3664="
  //"/assets/data/courses.json";
  constructor(private http:HttpClient) { }
  getMovies(_url): Observable<any> {
    console.log("in service get movies");
    return this.http.get(_url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}

//"https://api.themoviedb.org/3/movie/550?api_key=04008b7a54e14b1890c6aba85bde3664&query=Jack+Reacher"
