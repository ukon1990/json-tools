import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {Angulartics2Module} from 'angulartics2';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {environment} from '../environments/environment';
import { ViewerComponent } from './components/viewer/viewer.component';
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
    Angulartics2Module.forRoot(),
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
