import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import { ViewerComponent } from './components/viewer/viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatMenuModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/header/menu/menu.component';
import {MenuItemComponent} from './components/header/menu/menu-item/menu-item.component';
import {MenuDropdownComponent} from './components/header/menu/menu-dropdown/menu-dropdown.component';
import { MergeComponent } from './components/merge/merge.component';
import { OverwriteComponent } from './components/overwrite/overwrite.component';
import { DifferenceComponent } from './components/difference/difference.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    AboutComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    MenuDropdownComponent,
    MergeComponent,
    OverwriteComponent,
    DifferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
