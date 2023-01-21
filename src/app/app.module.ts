import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TloSrodekComponent } from './tlo-srodek/tlo-srodek.component';
import { PanelLewyComponent } from './panel-lewy/panel-lewy.component';
import { PanelPrawyGlownyComponent } from './panel-prawy-glowny/panel-prawy-glowny.component';

@NgModule({
  declarations: [
    AppComponent,
    TloSrodekComponent,
    PanelLewyComponent,
    PanelPrawyGlownyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
