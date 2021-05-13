import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value);
    let minutes = (value % 1) * 60;
    let seconds = (minutes % 1) * 60;
    minutes = Math.round(minutes);
    seconds = Math.ceil(seconds);
    if (hours && minutes) {
      return hours + 'h ' + minutes + 'min';
    } else if (hours) {
      return hours + 'h';
    } else if (minutes) {
      return minutes + 'min';
    }
    return seconds + 's';
  }
}
