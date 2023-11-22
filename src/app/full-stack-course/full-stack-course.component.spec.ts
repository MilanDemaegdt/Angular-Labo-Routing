import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackCourseComponent } from './full-stack-course.component';

describe('FullStackCourseComponent', () => {
  let component: FullStackCourseComponent;
  let fixture: ComponentFixture<FullStackCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
