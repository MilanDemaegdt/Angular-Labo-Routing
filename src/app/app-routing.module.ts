import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FrontEndCourseComponent } from './front-end-course/front-end-course.component';
import { FullStackCourseComponent } from './full-stack-course/full-stack-course.component';
const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'front-end-course', component: FrontEndCourseComponent },
  { path: 'full-stack-course', component: FullStackCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
