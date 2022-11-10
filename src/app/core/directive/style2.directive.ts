import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Courses } from '../../core/interfaces/courses';

@Directive({
  selector: '[appStyle2]',
})
export class Style2Directive implements OnInit {
  @Input('appStyle2') myCourse: Courses;

  constructor(private elRef: ElementRef, private r: Renderer2) {}

  ngOnInit(): void {
    let currentDate = new Date().getTime();
    let creationDate = Date.parse(this.myCourse.date);

    let twoWeeksMs = 24 * 60 * 60 * 1000 * 14;
    // console.log(this.myCourse);

    if (
      creationDate < currentDate &&
      creationDate >= currentDate - twoWeeksMs
    ) {
      this.r.setStyle(this.elRef.nativeElement, 'border', '2px solid green');
      this.r.setStyle(this.elRef.nativeElement, 'borderRadius', '6px');
      // this.r.setStyle(this.elRef.nativeElement, 'padding', '4px');
    }
    if (creationDate > currentDate) {
      this.r.setStyle(this.elRef.nativeElement, 'border', '2px solid blue');
      this.r.setStyle(this.elRef.nativeElement, 'borderRadius', '6px');
      // this.r.setStyle(this.elRef.nativeElement, 'padding', '4px');
    } else return;
  }
}
