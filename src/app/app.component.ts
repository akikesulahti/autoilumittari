import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppForm } from './models/app-form';
import { AppSettings } from './models/app-settings';
import { Car } from './models/car';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cars: Car[] = [
    { name: 'A', consumption: 3, icon: 'directions_car' },
    { name: 'B', consumption: 3.5, icon: 'airport_shuttle' },
    { name: 'C', consumption: 4, icon: 'local_shipping' },
  ];

  settings: AppSettings = {
    showDistanceSlider: true,
    limitDistance: true,
    maxDistance: 1000,
    showSpeedSlider: true,
    limitSpeed: true,
    maxSpeed: 120,
  };

  form = this.formBuilder.group({
    car: [this.cars[0], Validators.required],
    distance: [100, Validators.compose([Validators.required, Validators.min(1), Validators.max(1000)])],
    speed1: [40, Validators.compose([Validators.required, Validators.min(1), Validators.max(120)])],
    speed2: [60, Validators.compose([Validators.required, Validators.min(1), Validators.max(120)])],
    time1: [null],
    time2: [null],
    fuel1: [null],
    fuel2: [null],
    averageFuel1: [null],
    averageFuel2: [null],
  });

  private deferredPrompt!: BeforeInstallPromptEvent;
  public showPWAInstallButton!: boolean;

  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadPWAListener();
    // If any value in form changes then calculate time and fuel
    this.form.valueChanges.subscribe((value: AppForm) => {
      if (this.form.valid) {
        this.calculateTimeAndFuel(value);
      }
    });
    this.calculateTimeAndFuel(this.form.value);
    // Listen dark/light theme changes
    this.themeService.currentDarkMode.subscribe((darkMode: boolean) => {
      localStorage.setItem('darkMode', darkMode.toString());
      if (darkMode) {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#303030';
      } else {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
      }
    });
  }

  calculateTimeAndFuel(value: AppForm) {
    this.form.controls.time1.setValue(value.distance / value.speed1, { emitEvent: false });
    this.form.controls.fuel1.setValue(
      ((value.distance * value.car.consumption) / 100) * Math.pow(1.009, value.speed1 - 1),
      {
        emitEvent: false,
      }
    );
    this.form.controls.averageFuel1.setValue(value.car.consumption * Math.pow(1.009, value.speed1 - 1), {
      emitEvent: false,
    });
    this.form.controls.time2.setValue(value.distance / value.speed2, { emitEvent: false });
    this.form.controls.fuel2.setValue(
      ((value.distance * value.car.consumption) / 100) * Math.pow(1.009, value.speed2 - 1),
      {
        emitEvent: false,
      }
    );
    this.form.controls.averageFuel2.setValue(value.car.consumption * Math.pow(1.009, value.speed2 - 1), {
      emitEvent: false,
    });
  }

  // Prevent default PWA istallation popup
  loadPWAListener() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event as BeforeInstallPromptEvent;
      this.showPWAInstallButton = true;
    });
  }

  // Promt PWA install to browser
  addToHomescreen() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        this.showPWAInstallButton = false;
      }
    });
  }
}
