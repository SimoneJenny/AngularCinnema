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
  constructor(private route:ActivatedRoute) { }
  Booked : boolean = true;
  biografseats: number[][] =
  [
    [1,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [1,0,0,1,0,0]
  ];
  selectseats: number=0;

  biografTicket: number[][] =
  [
    // [9,11,13,15, 17],
    // [18,20,21,23,24]
    [1,0,0,0, 0],
    [0,1,0,0,0]
  ];
  selectTickets: number=0;
// liste af en liste af numbers
selectedDate: string="";



 @Input()
 @Output()

movie:movie;

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params)=>{this.movie=JSON.parse(params["dataMovie"])
    }
    )
  }
  selectseat(r: number ,s:number)
  {
    console.log(r+ "," + s)
    if(this.biografseats[r][s] == 0)
    {
      this.biografseats[r][s] = 2;
      this.selectseats++
      return;
    }
    if(this.biografseats[r][s] == 2)
    {
      this.biografseats[r][s] = 0;
      this.selectseats--
      return;
    }
  }

  selectTicket(t:number, d:number)
  {
    console.log(t+","+d)
    if(this.biografTicket[t][d] == 0)
    {
      this.biografTicket[t][d] = 2;
      this.selectTickets++
      return;
    }
    if(this.biografTicket[t][d] == 2)
    {
      this.biografTicket[t][d] = 0;
      this.selectTickets--
      return;
    }
  }

  selectedDates()
  {
    console.log("dato valgt")

  }
  // her tjekker den for row og seat er booket eller ej

  classSelector(r:number,s:number){
    switch(this.biografseats[r][s])
    {
        case 1:
        {
          return "seatTaken"
        }
        case 2:
        {
          return "seatSelected"
        }
        // default
        default:
        {
          return "seatavalible"
        }
    }


    //her laver vi en switch for alle case senarierne(seat avalible er i deafult)
  }
  classSelectorTicket(t:number, d:number){
    switch(this.biografTicket[t][d])
    {
        case 1:
        {
          return "cinnemafull"
        }
        case 2:
        {
          return "TicketSelected"
        }
        // default
        default:
        {
          return "ticketAvalible"
        }
    }
  }
  inbasket(){
    alert("lagt i kurv")
  }
    // Json.parse er en converter
    // route vi det object vi går ind i og det gør vi kan få fat i vores route i url
  }






