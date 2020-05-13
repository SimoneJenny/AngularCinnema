import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private service: HttpService) { }
  ngOnInit(): void {

  }
}
