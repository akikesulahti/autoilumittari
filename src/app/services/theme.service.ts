import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSource = new BehaviorSubject<boolean>(false);
  currentDarkMode = this.darkModeSource.asObservable();

  constructor() {
    if (localStorage.getItem('darkMode') === 'true') {
      this.darkModeSource.next(true);
    }
  }

  changeDarkMode(darkMode: boolean) {
    this.darkModeSource.next(darkMode);
  }
}
