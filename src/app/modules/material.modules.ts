import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: [MatCardModule, MatTabsModule],
})
export class MaterialModule {}
