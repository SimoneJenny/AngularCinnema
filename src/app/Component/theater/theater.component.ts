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

showtime: string[][]=
[
  ["9.30","10.50","13.00","15.00", "17.00"],
  ["18.00","20.00","21.00","23.00","24.00"]
];

showseats: string[][]=
[
  ["s0,row0", "s1,row0","s2,row0","s3,row0","s4,row0","s4,row0"],
  ["s0,row1", "s1,row1","s2,row1","s3,row1","s4,row1","s4,row1" ],
  ["s0,row2","s1,row2","s2,row2","s3,row2","s4,row2","s4,row2" ],
  ["s0,row3","s1,row3","s2,row3","s3,row3","s4,row3","s4,row3" ],
  ["s0,row4","s1,row4","s2,row4","s3,row4","s4,row4","s4,row4" ],
  ["s0,row5","s1,row5","s2,row5","s3,row5","s4,row5","s4,row5" ],
]
biografTicket: number[][] =
  [
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
    }
  }

  selectTicket(t:number, d:number)
  {
    console.log(t+","+d)
    if(this.biografTicket[t][d] == 0)
    {
      this.biografTicket[t][d] = 2;
      this.selectTickets++
      // alert(this.selectTickets) viser status
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






