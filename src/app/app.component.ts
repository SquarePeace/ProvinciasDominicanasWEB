import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "./services/provincia.service";
import { Provincia } from "./models/provincia";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProvinciaService]
})
export class AppComponent implements OnInit {


public provincias!: Provincia[];

  constructor(
    private _provinciaService: ProvinciaService
  ) {}

  ngOnInit() {

    this._provinciaService.getProvincias().subscribe(provincias => {
      this.provincias = provincias.data;
      console.log('Provincias: ' + provincias);
    })


    // this._provinciaService.getProvincias().subscribe(

    //   Response => {
    //     if (Response.provincias) {
    //       this.provincias = Response.provincias;
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )

  }

}
