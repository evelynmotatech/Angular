import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraCientificaModule } from './calculadora-cientifica';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraCientificaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
