import { delay, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { Courses } from '../interfaces/courses';
import { CoursesComponent } from '../pages/courses/courses.component';

@Injectable({
  providedIn: 'root',
})
export class CoursesService implements OnInit {
  constructor(private http: HttpClient) {}

  postToEdit: Courses;
  loading = false;
  posts: Courses[] = [];
  url = 'http://localhost:3004/courses';

  ngOnInit(): void {}

  getCourse() {
    this.loading = true;
    this.http
      .get<Courses[]>(this.url)
      .pipe(delay(500))
      .subscribe((courses: Courses[]) => {
        this.posts = courses;
        this.loading = false;
      });
  }

  getById(id: number) {
    return this.http
      .get<Courses>(`${this.url}/${id}`)
      .pipe(delay(500))
      .subscribe((post) => {
        this.postToEdit = post;
      });
  }

  addCourse(course: Courses) {
    this.http.post<Courses>(this.url, course).subscribe((posted) => {
      console.log('to post', posted);
    });
  }

  deleteCourse(id: any) {
    this.http.delete<Courses>(`${this.url}/${id}`).subscribe(() => {
      this.posts = this.posts.filter((c) => c.id !== id);
    });
  }
  updateCourse(post: Courses) {
    this.http
      .patch<Courses>(`${this.url}/${post.id}`, post)
      .subscribe(() => {});
  }
}
