import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AppSettings } from 'src/app/models/app-settings';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input() cars!: Car[];
  @Input() form!: FormGroup;
  @Input() settings!: AppSettings;

  constructor() {}

  ngOnInit(): void {}

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
}
