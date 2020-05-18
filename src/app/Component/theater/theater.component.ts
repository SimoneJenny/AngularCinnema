import { Component } from '@angular/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent {
showMessage:string= "Du har valgt film og booket disse sæder:";
  constructor() { }

  // ngOnInit(): void {
  // }
onNotifyClicked(message:string): void{
this.showMessage=message;

}
}
