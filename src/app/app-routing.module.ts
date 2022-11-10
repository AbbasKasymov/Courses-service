import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { AddCourseComponent } from './core/pages/add-course/add-course.component';
import { CoursesComponent } from './core/pages/courses/courses.component';
import { EditCourseComponent } from './core/pages/edit-course/edit-course.component';
import { LoginPage1Component } from './core/pages/login-page1/login-page1.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPage1Component,
  },
  {
    path: 'add-course',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-course/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuard],
  },

  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
