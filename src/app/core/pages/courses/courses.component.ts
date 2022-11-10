import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { bufferToggle, debounceTime, Subject } from 'rxjs';
import { FilterPipe } from '../../pipes/filter.pipe';
import { AuthenticationService } from '../../services/authentication.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  search = '';

  filter = new FilterPipe();

  constructor(public courses: CoursesService, private router: Router) {}

  goToAddCoursePage() {
    this.router.navigate(['/add-course']);
  }

  ngOnInit() {
    this.courses.getCourse();
  }

  loadMore() {
    let message: string = 'this is handler';
    console.log(message);

    return message;
  }
}
