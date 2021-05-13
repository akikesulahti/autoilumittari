import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FaqComponent } from './components/faq/faq.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SpeedComparisonComponent } from './components/speed-comparison/speed-comparison.component';
import { MaterialModule } from './modules/material.modules';
import { TimePipe } from './pipes/time.pipe';

registerLocaleData(localeFi, 'fi');

@NgModule({
  declarations: [AppComponent, SpeedComparisonComponent, SettingsComponent, FaqComponent, TimePipe],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fi' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
