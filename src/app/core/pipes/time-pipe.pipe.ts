import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
})
export class TimePipePipe implements PipeTransform {
  transform(time: number): any {
    if (time < 60) {
      return `${time} min`;
    }
    if (time > 60) {
      let hours = Math.trunc(time / 60);
      let minutes = time - hours * 60;
      return `${hours}h ${minutes} min`;
    }
  }
}
