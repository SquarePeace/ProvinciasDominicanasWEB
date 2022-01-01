import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../models/provincia';
import { Global } from '../services/global';

@Injectable()
export class ProvinciaService {
   public url: string;

   constructor(private _http: HttpClient) {
      this.url = Global.url;
   }

   getProvincias(): Observable<any> {
      var provincias = 'provincias';
      
      return this._http.get(this.url + provincias);
   }

   getProvincia(provinciasID: any): Observable<any> {
      return this._http.get(this.url + 'provincia/' + provinciasID);
   }

   getMunicipios(MunicipiosID: any): Observable<any> {
      return this._http.get(this.url + 'provincias/' + MunicipiosID + '/municipios');
   }

   search(searchString: any): Observable<any> {
      return this._http.get(this.url + 'search/' + searchString);
   }
}
