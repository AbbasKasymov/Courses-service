import { Pipe, PipeTransform } from '@angular/core';
import { Courses } from '../../core/interfaces/courses';

@Pipe({
  name: 'orderBy1',
})
export class OrderBy1Pipe implements PipeTransform {
  transform(posts: Courses[]): Courses[] {
    return posts.sort(function (a, b) {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  }
}
