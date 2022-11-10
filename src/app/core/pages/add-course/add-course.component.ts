import { Courses } from './../../interfaces/courses';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  form: FormGroup;

  durationCourse = 0;

  constructor(private createCervice: CoursesService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      length: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('', Validators.required),
    });
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form);
      const formData: Courses = { ...this.form.value };
      console.log(formData);
      this.createCervice.addCourse(formData);
      this.form.reset();
    }
  }

  showDuration(event: any) {
    this.durationCourse = event.target.value;
  }
}
