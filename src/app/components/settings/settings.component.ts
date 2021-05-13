import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AppSettings } from 'src/app/models/app-settings';
import { Car } from 'src/app/models/car';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input() cars!: Car[];
  @Input() form!: FormGroup;
  @Input() settings!: AppSettings;
  @Input() showPWAInstallButton = false;
  @Output() addToHomescreen = new EventEmitter<boolean>();

  darkMode!: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentDarkMode.subscribe((darkMode: boolean) => {
      this.darkMode = darkMode;
    });
  }

  setValidators() {
    if (this.settings.limitDistance) {
      this.form.controls.distance.setValidators(
        Validators.compose([Validators.min(1), Validators.max(this.settings.maxDistance)])
      );
    } else {
      this.form.controls.distance.setValidators([Validators.min(1)]);
    }
    this.form.controls.distance.updateValueAndValidity();
  }

  changeDarkMode(event: MatCheckboxChange) {
    this.themeService.changeDarkMode(event.checked);
  }

  addToHomescreenClick() {
    this.addToHomescreen.emit(true);
  }
}
