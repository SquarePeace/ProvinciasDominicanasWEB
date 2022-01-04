import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "../services/provincia.service";
import { Provincia } from "../models/provincia";
import { Router, ActivatedRoute } from "@angular/router";
import { Global } from "../services/global";

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  public municipio!: Provincia[];
  public url!: string;
  displayedColumns: string[] = ['Municipios'];

  constructor(
    private _provinciaService: ProvinciaService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {


    this._route.params.subscribe(params =>{
      let id = params['id'];

      this._provinciaService.getMunicipios(id).subscribe(municipio => {
        this.municipio = municipio.data;
        console.log('Municipios: ' + municipio);
      })
    })
  }
}
