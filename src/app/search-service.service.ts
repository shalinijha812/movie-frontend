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
  public url2="https://localhost:8085/api/v1/movie/";
  
  constructor(private http:HttpClient) { }
  getMovies(_url): Observable<any> {
    console.log("in service get movies");
    return this.http.get(_url).pipe(catchError(this.errorHandler));
  }
  findMovie(title: String): Observable<any> {
    return this.http.get("https://localhost:8085/api/v1/movie/" + title).pipe(catchError(this.errorHandler));
  }
  addMovie(movie:IMovie):Observable<any>{
    return this.http.post(this.url2,movie);

  }
  getAllMovie():Observable<any>{
    return this.http.get(this.url2);
  }
  deleteMovie(id: Number): Observable<any> {
    return this.http.delete("https://localhost:8085/api/v1/movie/" + id).pipe(catchError(this.errorHandler));
  }
  updateMovie(id: Number, comments: String): Observable<any> {
    return this.http.put("https://localhost:8085/api/v1/movie/" + id, comments).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}

//"https://api.themoviedb.org/3/movie/550?api_key=04008b7a54e14b1890c6aba85bde3664&query=Jack+Reacher"
