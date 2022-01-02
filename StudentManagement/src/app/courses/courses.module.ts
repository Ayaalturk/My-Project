import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListViewComponent } from './courses-list-view/courses-list-view.component';
import { NewCourseDialogComponent } from './new-course-dialog/new-course-dialog.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



const routes: Routes = [
  {
    path: '', component: CoursesListViewComponent
  },
  { path:'course/edit/:id',component: EditCourseDialogComponent,} ,
  { path:'Add-dialog',component: NewCourseDialogComponent,} 
  
];

@NgModule({
  declarations: [
    CoursesListViewComponent,
    NewCourseDialogComponent,
    EditCourseDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
   InputTextModule,
   TableModule,
   DialogModule,
   ConfirmDialogModule,
   MessagesModule,
   MessageModule
  
  ]
})
export class CoursesModule { }
