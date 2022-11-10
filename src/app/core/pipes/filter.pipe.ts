import { Pipe, PipeTransform } from '@angular/core';
import { Courses } from '../../core/interfaces/courses';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(posts: Courses[], searchValue: string = ''): Courses[] {
    if (!searchValue.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return post.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
  }
}
