import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "../services/provincia.service";
import { Provincia } from "../models/provincia";
import { Router, ActivatedRoute } from "@angular/router";
import { Global } from "../services/global";

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.css']
})
export class DistritosComponent implements OnInit {

  public distrito!: Provincia[];
  public url!: string;
  displayedColumns: string[] = ['Codigo', 'Nombre'];

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

      this._provinciaService.getDistritos(id).subscribe(distrito => {
        this.distrito = distrito.data;
        console.log('Distritos: ' + distrito);
      })
    })

  }

}
