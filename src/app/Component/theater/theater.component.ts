import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { movie } from 'src/app/model/movie';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent {
showMessage:string= "Du har valgt filmen {{}}og booket disse sæder {{}}:";
  constructor(private route:ActivatedRoute) { }

 @Input()
 @Output()
movie:movie;
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params)=>{this.movie=JSON.parse(params["dataMovie"])
    }
    )
  }
    // Json.parse er en converter
    // route vi det object vi går ind i og det gør vi kan få fat i vores route i url
  }
// onNotifyClicked(message:string): void{
// this.showMessage=message;

// }
// }
// bookedseat(event: any{
//   event.target.disabled = true;
// })

