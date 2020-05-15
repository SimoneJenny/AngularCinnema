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
    // http://localhost:44324/api/movies/1
  }}
  }
