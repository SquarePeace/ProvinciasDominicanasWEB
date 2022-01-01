import { Component, OnInit, Input } from '@angular/core';
import { Provincia } from "../models/provincia";
import { Global } from "../services/global";

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  public url: string;
  displayedColumns: string[] = ['Nombre', 'Municipios'];
  @Input() provincias!: Provincia[];

  constructor() {
    this.url = Global.url;
  }  

  ngOnInit(): void {
  }

}
