import { DropdownModule } from 'ion-dropdown';
/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app',
  template: `<ion-dropdown></ion-dropdown>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, DropdownModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
