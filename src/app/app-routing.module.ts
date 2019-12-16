import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {TitledRoutes} from './models/route/titled-routes.model';
import {MergeComponent} from './components/merge/merge.component';
import {OverwriteComponent} from './components/overwrite/overwrite.component';
import {DifferenceComponent} from './components/difference/difference.component';


export const appRoutes: TitledRoutes = [
  {path: '', redirectTo: 'merge', pathMatch: 'full'},
  {title: 'Merge', path: 'merge', component: MergeComponent},
  {title: 'Overwrite', path: 'overwrite', component: OverwriteComponent},
  {title: 'Difference', path: 'difference', component: DifferenceComponent},
  {title: 'About', path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
