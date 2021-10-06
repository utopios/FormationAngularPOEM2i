import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    SideBarComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
