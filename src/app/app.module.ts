import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeedComparisonComponent } from './components/speed-comparison/speed-comparison.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FaqComponent } from './components/faq/faq.component';
import { MaterialModule } from './modules/material.modules';
import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';

registerLocaleData(localeFi, 'fi');

@NgModule({
  declarations: [
    AppComponent,
    SpeedComparisonComponent,
    SettingsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fi' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
