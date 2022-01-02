import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCourseDialogComponent } from './courses/edit-course-dialog/edit-course-dialog.component';
import { EditStudentDialogComponent } from './students/edit-student-dialog/edit-student-dialog.component';
import { StudentDialogComponent } from './students/student-dialog/student-dialog.component';
import { NewCourseDialogComponent } from './courses/new-course-dialog/new-course-dialog.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'course', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'user/edit/:id', component: EditStudentDialogComponent },
  { path: 'course/edit/:id', component: EditCourseDialogComponent },
  { path: 'dialog', component: StudentDialogComponent, },
  { path: 'Add-dialog', component: NewCourseDialogComponent, }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
