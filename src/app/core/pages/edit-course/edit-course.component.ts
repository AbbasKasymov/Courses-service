import { formatDate } from '@angular/common';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, switchMap, BehaviorSubject } from 'rxjs';
import { Courses } from '../../interfaces/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  post: Courses;
  form: FormGroup;
  durationCourse = 0;

  constructor(
    private route: ActivatedRoute,
    private postsService: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.postsService.getById(+params['id']);
    });

    this.form = new FormGroup({
      name: new FormControl(this.post.name, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.maxLength(500),
      ]),
      duration: new FormControl(this.post.length, Validators.required),
      date: new FormControl(this.post.date, Validators.required),
      authors: new FormControl('', Validators.required),
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form);
      const formData = { ...this.form.value };
      console.log(formData);
      this.post = {
        ...this.post,
        name: formData.name,
        description: formData.description,
        length: formData.duration,
        date: formData.date,
        authors: formData.authors,
      };
      console.log(this.post);

      this.postsService.updateCourse(this.post);
      this.router.navigate(['/']);
    }
  }

  showDuration(event: any) {
    this.durationCourse = event.target.value;
  }
}
