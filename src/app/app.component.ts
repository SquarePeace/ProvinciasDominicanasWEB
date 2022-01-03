import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "./services/provincia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProvinciaService]
})
export class AppComponent implements OnInit {


  constructor(){}

  ngOnInit() {
  }
}
