import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'provincias/municipios/:id', component: MunicipiosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
