import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "../services/provincia.service";
import { Provincia } from "../models/provincia";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProvinciaService]
})
export class HomeComponent implements OnInit {

  public provincias!: Provincia[];

  constructor(
    private _provinciaService: ProvinciaService
  ) { }

  ngOnInit(): void {
    this._provinciaService.getProvincias().subscribe(provincias => {
      this.provincias = provincias;
      console.log('Provincias: ' + provincias);
    })
  }

}
