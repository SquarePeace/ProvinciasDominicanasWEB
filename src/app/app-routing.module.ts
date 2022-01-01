import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'provincias/municipios/:id', component: MunicipiosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
