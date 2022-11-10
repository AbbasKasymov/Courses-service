import { RouterModule } from '@angular/router';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Style2Directive } from './directive/style2.directive';
import { TimePipePipe } from './pipes/time-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderBy1Pipe } from './pipes/order-by1.pipe';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LoginPage1Component } from './pages/login-page1/login-page1.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true,
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    CardsComponent,
    Style2Directive,
    TimePipePipe,
    FilterPipe,
    OrderBy1Pipe,
    LoginPage1Component,
    AddCourseComponent,
    EditCourseComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  exports: [HeaderComponent, FooterComponent, CoursesComponent],
})
export class CoreModule {}
