import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
//holder data
genres: Genre[];



  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getgenre()
      .subscribe(arg => {this.genres = arg;
      console.log(arg)
      });

  }

}


/**
 DI then import with lamp
 code metod to get data and make property to hold data , import the class
 HTML show it
 include HTML
 */
