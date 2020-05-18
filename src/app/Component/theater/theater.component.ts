import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent {
showMessage:string= "Du har valgt filmen {{}}og booket disse sæder {{}}:";
  constructor() { }

 @Input()
 @Output()

  // ngOnInit(): void {
  // }
onNotifyClicked(message:string): void{
this.showMessage=message;

}
}

