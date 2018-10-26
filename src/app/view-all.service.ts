// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// mport { Observable, EMPTY, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Movie } from './Movie';


// @Injectable({
//   providedIn: 'root'
// })
// export class ViewAllService {
//   private url: string = "http://localhost:9090/movie/api/v1/movie/"
//   constructor(private http : HttpClient) { }
//   getAllMovies(): Observable<any> {
//     return this.http.get("localhost:8080/api/v1/movie/").pipe(catchError(this.errorHandler));
//   }
//   findMovie(title:String): Observable<any> {
//     return this.http.get("localhost:8080/api/v1/movie/"+title).pipe(catchError(this.errorHandler));
//   }
//   addMovie(movie:Movie): Observable<any> {
//     return this.http.post("localhost:8080/api/v1/movie/",movie).pipe(catchError(this.errorHandler));
//   }
//   deleteMovie(id:Number): Observable<any> {
//     return this.http.delete("localhost:8080/api/v1/movie/"+id).pipe(catchError(this.errorHandler));
//   }
//   updateMovie(id:Number,comments:String): Observable<any> {
//     return this.http.put("localhost:8080/api/v1/movie/"+id,comments).pipe(catchError(this.errorHandler));
//   }

 
// }
