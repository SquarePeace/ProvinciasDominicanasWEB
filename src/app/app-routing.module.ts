import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { HomeComponent } from './home/home.component';
import { DistritosComponent } from './distritos/distritos.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'provincias/municipios/:id', component: MunicipiosComponent},
  {path: 'provincias/distritos_municipales/:id', component: DistritosComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
