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
  // den enkelete movie
  moviegenre: any[];
  moviegenrem: any[];
  genres: Genre[]=[];
  //dette er en en tom liste /array


  constructor(private service: HttpService) { }
  // private har en default constructor

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
  // filter vælger item fra array og returnre som et nyt array

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
    // dette er er et lamba udtryk
  }
  //subsribe: er en metode til at observere typen. Det er et værktøj der streamer data til en række forskellige komponenter/tjeneser der bruger den
  //ngif: fjerner/genskaber en del af DOM træet baseret på udtryk
  //DOM = Document Object Model
  //Ng-Module: det er en klasse, der tager metadataobjekter. Beskriver hvordan man kompiler en komponentskabelon og hvordan man opretter injections
  //ng-submit: specificere en funktion, der skal køres
  //NG-for: det er en indbygget template, der gør det nemt at oprette en skabelon til hvert element
  //ng-class: giver mulighed for at man dynamisk kan indstille  css klasserne på et html element ved at databinde et udtryk der reprænserer alle klasserne

}
