import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/service/courses.service';
import { SharedService } from 'src/app/service/shared.service';
import { courses } from '../courses.model';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-courses-list-view',
  templateUrl: './courses-list-view.component.html',
  styleUrls: ['./courses-list-view.component.css']
})
export class CoursesListViewComponent implements OnInit {
  course!: courses;
  isLoading = false;
  courses!: courses[];


  constructor(public coursesService: CoursesService, public sharedService: SharedService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.coursesService.getCourses('https://jsonplaceholder.typicode.com/comments')
      .subscribe(
        result => {
          this.isLoading = false;
          let response: any = result;
          this.course = response;


        },
        error => {
          console.log(error);
        });

    this.sharedService.setAvilableCourse(this.course);
  }

  getMessage() {
    alert("This course is not available");
  }

  addOnstudents() {
    this.sharedService.getAvailableCourse();
    alert("Added successfully");
  }

  deleteCourse(j: number) {

    this.coursesService.deleteCourse(j).subscribe(
      (resp) => {
        console.log(resp);

      },
      err => { console.log(err); }

    );

    console.log(j);

  }





}



