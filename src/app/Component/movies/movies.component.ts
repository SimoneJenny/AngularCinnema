import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movie';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/genre';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
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


  constructor(private service: HttpService) { }
  moviedropdown;

  moviedata:Array<movie>=[this.moviedropdown]


  ngOnInit(): void {

  this.service.getMovie().subscribe(arg => this.movie = arg);console.log(this.movie);
  
  this.service.getgenre().subscribe(arg => { this.genres = arg; console.log(this.genres);
  });

  }
    //get
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

    //post/add
    postMovie(){
      console.log(this.temp)
      // return;
      alert("tilføjet");

      //  let gArray: any = [
      //    {
      //    "genreId":1
      //    }
      // ];
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

    //put/update
    putMovie(){

    }

}
