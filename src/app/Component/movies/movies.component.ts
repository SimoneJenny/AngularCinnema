import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/model/movie';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: movie[];
  constructor(private service: HttpService) { }

  ngOnInit(): void {

  this.service.getMovie()
      .subscribe(arg => {this.movie = arg;
      console.log(arg)
      });
    }
}
