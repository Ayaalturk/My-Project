import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/service/courses.service';
import { courses } from '../courses.model';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-new-course-dialog',
  templateUrl: './new-course-dialog.component.html',
  styleUrls: ['./new-course-dialog.component.css']
})
export class NewCourseDialogComponent implements OnInit {
  public data!: courses;
  display: boolean = false;

  constructor(public courseService: CoursesService,
    public http: HttpClient,
    private router: Router,
    private messageService: MessageService) {

  }

  ngOnInit(): void { }

  onSubmit(data: courses) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', data)
      .subscribe((result) => {
        console.warn("result", result)
      })
    console.warn(data)
    this.display = false;
  }

  goList() {
    this.router.navigate(['course'])
  }

  showDialog() {
    this.display = true;
  }



}
