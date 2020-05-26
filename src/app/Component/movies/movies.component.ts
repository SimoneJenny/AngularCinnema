import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { movie } from 'src/app/model/movie';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/genre';
import { Observable } from 'rxjs';
import { tseats } from 'src/app/model/theaterseat';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  newColor = false;
  toggleColor() {
  this.newColor = !this.newColor;

  }
  @Input()
  @Output()
  onClick(test: movie): void{
  console.log(test);
  return;
}
  MovieId: any;
  Tittle: any;
  Description: string;
  ReleaseDateTime: Date;
  Runtime: string;
  Rating: string;
  MainActors: string;
  Theater: string;
  Genrenumber: any;

  temp: any[];
  tempmovie: any[];
  moviegenre: any[];
  moviegenrem: any[];
  movie: movie[] =[];
  genres: Genre[]=[];
  Tseat: tseats[];
  moviesearchlist: movie[]=[];
  moviesearchtxt: string;
  genresearchlist: Genre[]=[];


  constructor(private service: HttpService, private router: Router) { }// dette er en dependcie injection

  ngOnInit(): void {

  this.service.getMovie().subscribe(arg =>{this.movie = arg});console.log(this.movie);

  this.service.getgenre().subscribe(arg => { this.genres = arg; console.log(this.genres);
  });
// får movie ud med variablerne
  }
    getMovie(){
      console.log(this.tempmovie);

      const movietosee={
        Tittle: this.Tittle,
        Description: this.Description,
        ReleaseDateTime: this.ReleaseDateTime,
        Runtime: this.Runtime,
        Rating: this.Rating,
        MainActors: this.MainActors,
        Theater: this.Theater,
        Genrenumber: this.Genrenumber,
        moviegenre: this.tempmovie
      }
    }
// knap der navigere til næste side der hedder show
    orderfrommovie(movieobjtoshow:movie){
      console.log(movieobjtoshow);
      let navigationtonewpage: NavigationExtras={
        queryParams:{
          // variable
          "dataMovie": JSON.stringify(movieobjtoshow)
          // skal matche inde i theater
        }
      };
      this.router.navigate(["Show"], navigationtonewpage)
 }
// queryparams er en Observable der indeholder queyparameters for alle routes
    // inde i queyparams(svarer til postman) er der en variable. movieobjtoshow vil vi gerne stingfy. this router routes to show og kaster data afsted.

    lookforchange()
    {
      // console.log(this.moviesearchtxt);
      if(this.moviesearchtxt=="")
      {
        this.moviesearchlist =[]
      }
      else
      {
        this.moviesearchlist = this.movie.filter(m => m.tittle.toLowerCase().indexOf(this.moviesearchtxt.toLowerCase(),0)>-1)
        this.genresearchlist = this.genres.filter(g => g.genres.toLowerCase().indexOf(this.moviesearchtxt.toLowerCase(),0)>-1)
      }

    }






}
