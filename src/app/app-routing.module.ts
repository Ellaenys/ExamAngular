import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionsComponent} from "./page/regions/regions.component";
import {DepartementsComponent} from "./page/departements/departements.component";

const routes: Routes = [
  { path: '' , component : RegionsComponent },
  { path: 'departements' , component : DepartementsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
