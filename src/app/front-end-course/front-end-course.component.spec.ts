import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndCourseComponent } from './front-end-course.component';

describe('FrontEndCourseComponent', () => {
  let component: FrontEndCourseComponent;
  let fixture: ComponentFixture<FrontEndCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
