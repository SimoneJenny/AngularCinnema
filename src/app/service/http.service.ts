import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre';
import { movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url : string = 'https://localhost:44378/api/Movies';
  urlstart: string ='https://localhost:44378/api/';

  constructor(private http: HttpClient) { }
  //metode for genre
  getgenre(): Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.urlstart}genre`);
  }
  getMovie(): Observable<movie[]>{
    return this.http.get<movie[]>(`${this.urlstart}movies`);
  }
  

}

/**
 *DI use lamp
 *URL
 *method for get/put
 */
