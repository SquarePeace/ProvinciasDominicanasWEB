import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProvinciasComponent } from './provincias/provincias.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { HomeComponent } from './home/home.component';
import { DistritosComponent } from './distritos/distritos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasComponent,
    MunicipiosComponent,
    HomeComponent,
    DistritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
