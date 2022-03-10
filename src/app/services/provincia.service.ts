import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

   getProvincia(ID: any): Observable<any> {
      return this._http.get(this.url + 'provincia/' + ID);
   }

   findMunicipioByProvincia(ID: any): Observable<any> {
      return this._http.get(this.url + 'provincias/' + ID + '/municipios');
   }

   findDistritoByProvincia(ID: any): Observable<any> {
      return this._http.get(this.url + 'provincias/' + ID + '/distritos_municipales');
   }

   search(searchString: any): Observable<any> {
      return this._http.get(this.url + 'search/' + searchString);
   }
}
