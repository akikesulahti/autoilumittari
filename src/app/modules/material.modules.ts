import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class MaterialModule {}
