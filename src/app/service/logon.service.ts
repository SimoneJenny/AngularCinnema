import { Injectable, OnInit, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogonService {
  loggedOn: boolean = false;

  constructor() { }

  logOut(): void{
    this.loggedOn = false;
  }

  logIn(): void{

  }
}
