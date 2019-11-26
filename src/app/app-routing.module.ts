import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewerComponent} from './components/viewer/viewer.component';
import {AboutComponent} from './components/about/about.component';


const routes: Routes = [
  {path: '', component: ViewerComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
