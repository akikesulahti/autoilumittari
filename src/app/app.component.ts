import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    maxSpeed: 1000,
  };

  form = this.formBuilder.group({
    car: [this.cars[0], Validators.required],
    distance: [100, Validators.compose([Validators.min(1), Validators.max(1000)])],
    speed1: [40, Validators.compose([Validators.min(1), Validators.max(120)])],
    speed2: [60, Validators.compose([Validators.min(1), Validators.max(120)])],
    time1: [null],
    time2: [null],
    fuel1: [null],
    fuel2: [null],
  });

  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      if (this.form.valid) {
        this.calculateTimeAndFuel(value);
      }
    });
    this.calculateTimeAndFuel(this.form.value);
    // Theme
    this.themeService.currentDarkMode.subscribe((darkMode: boolean) => {
      localStorage.setItem('darkMode', darkMode.toString());
      if (darkMode) {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#303030';
      } else {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
      }
    });
  }

  calculateTimeAndFuel(value: any) {
    this.form.controls.time1.setValue(value.distance / value.speed1, { emitEvent: false });
    this.form.controls.fuel1.setValue(
      ((value.distance * value.car.consumption) / 100) * Math.pow(1.009, value.speed1 - 1),
      {
        emitEvent: false,
      }
    );
    this.form.controls.time2.setValue(value.distance / value.speed2, { emitEvent: false });
    this.form.controls.fuel2.setValue(
      ((value.distance * value.car.consumption) / 100) * Math.pow(1.009, value.speed2 - 1),
      {
        emitEvent: false,
      }
    );
  }
}
