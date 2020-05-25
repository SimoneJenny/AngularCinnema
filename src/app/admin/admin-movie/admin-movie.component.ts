import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/genre';
import {Observable} from "rxjs";
import { movie } from 'src/app/model/movie';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {
  MovieId: Number;
  Tittle: string;
  Description: string;
  ReleaseDateTime: Date;
  Runtime: string;
  Rating: string;
  MainActors: string;
  Theater: string;
  Genrenumber: any;

  temp: any[];
  tempmovie: any[];
  movie: movie[];
  movie2: movie;
  moviegenre: any[];
  moviegenrem: any[];
  genres: Genre[]=[];


  constructor(private service: HttpService) { }

  ngOnInit(): void {

    this.movie2 = new movie(); //this.movie er et obj og vi instansiere til den klase Movie

    this.service.getMovie().subscribe(arg => this.movie = arg);console.log(this.movie);

    this.service.getgenre().subscribe(arg => { this.genres = arg; console.log(this.genres)});
  }

//søg film
searchMovie(){
  //this function should parse movieId to service and return to object
  this.service.searchMovie("Frozen").subscribe(
    (moviefromApi)=> {this.movie2 = moviefromApi
    // dette er en function
    console.log(this.movie);
    }
  )
}
  // //post/add
  postMovie(){
    console.log(this.temp)
    alert("tilføjet");


    const movietoadd={
      Tittle: this.Tittle,
      Description: this.Description,
      ReleaseDateTime: this.ReleaseDateTime,
      Runtime: this.Runtime,
      Rating: this.Rating,
      MainActors: this.MainActors,
      Theater: this.Theater,
      Genrenumber: this.Genrenumber,
      moviegenre: this.temp

    }
    this.service.postMovie(movietoadd).subscribe(
      (movietoadded) => {this.movie.push(movietoadded)}
    );
  }

  deleteMovie(movietodelete: number)
  {
    console.log(movietodelete);
    this.movie=this.movie.filter(movieobj=>movieobj.movieId!==movietodelete);
    this.service.deleteMovie(movietodelete).subscribe();
    alert("Film slettet");
  }

  //put/update
  UpdateMovie()
  {
    console.log(this.movie)
    // return;
    this.service.updateMovie(this.movie2.movieId, this.movie2).subscribe(
    )
    alert("Film opdateret")
  }
  searchMovies(){
    this.service.searchMovie(this.movie2.tittle).subscribe(
      (moviefromapi)=>{
        this.movie2=moviefromapi
        console.log(this.movie2);
    }
    )
  }

}
