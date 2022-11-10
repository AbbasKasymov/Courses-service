import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Courses } from '../../interfaces/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  @Input() myCourse: Courses;

  constructor(
    public route: ActivatedRoute,
    public postService: CoursesService
  ) {}

  ngOnInit(): any {}

  removeCourse(id: any) {
    let modal = confirm('Do you really want to delete this course?');

    if (modal) {
      this.postService.deleteCourse(id);
    } else return;
  }
}
