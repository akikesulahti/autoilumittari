import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppSettings } from 'src/app/models/app-settings';
import { Car } from 'src/app/models/car';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-speed-comparison',
  templateUrl: './speed-comparison.component.html',
  styleUrls: ['./speed-comparison.component.scss'],
})
export class SpeedComparisonComponent implements OnInit {
  @Input() cars!: Car[];
  @Input() form!: FormGroup;
  @Input() settings!: AppSettings;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  updateSpeed1(event: any): void {
    this.form.controls.speed1.setValue(event.value);
  }

  updateSpeed2(event: any): void {
    this.form.controls.speed2.setValue(event.value);
  }

  updateDistance(event: any): void {
    this.form.controls.distance.setValue(event.value);
  }
}
