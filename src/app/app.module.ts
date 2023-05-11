import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// Configuraión del locale de la app
import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeKoKP from '@angular/common/locales/ko-KP';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsMX );
registerLocaleData( localeFrCA );
registerLocaleData( localeKoKP );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    //LANGUAGE DATE
    { provide:LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
