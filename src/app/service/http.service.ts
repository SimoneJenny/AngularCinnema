import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre';
import { movie } from '../model/movie';

const httpoptions={ //dette er en konstant
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url : string = 'https://localhost:44378/api/Movies';
  urlstart: string ='https://localhost:44378/api/';


  constructor(private http: HttpClient) { }
  //metode for genre
  getgenre(): Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.urlstart}genres`);
  }

  getMovie(): Observable<movie[]>{ //all movies
    return this.http.get<movie[]>(`${this.urlstart}Movies`);
  }
  postMovie(movietoadd: any): Observable<movie>{
    return this.http.post<movie>(`${this.urlstart}Movies`, movietoadd, httpoptions);
  }
   //delete
   deleteMovie(movietodelete: number):Observable<movie>{{
    return this.http.delete<movie>(`${this.urlstart}Movies/${movietodelete}`, httpoptions);
  }}

  // update
  updateMovie(movieidHTML: number, updateMovie:movie):Observable<movie>{{
      return this.http.put<movie>(`${this.urlstart}Movies/${movieidHTML}`,updateMovie, httpoptions);
  }}

  //search movieeithTitle
  searchMovie(movietoseach:string):Observable<movie>{{
      return this.http.get<movie>(`${this.urlstart}Movies/search/${movietoseach}`, httpoptions);
  }}


//   getnewpassword(newpassword:string):Observable<Users>{{
//     return this.http.get<movie>(`${this.urlstart}Users/${newpassword}`, httpoptions);
// }}
getdatevalue(getdate:string):Observable<any>{{
  return this.http.get<any>(`${this.urlstart}Theater/${getdate}`, httpoptions);
}}


}

