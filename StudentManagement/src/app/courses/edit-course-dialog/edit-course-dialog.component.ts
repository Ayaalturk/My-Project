import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/service/courses.service';
import { MessageService } from 'primeng/api';
import { courses } from '../courses.model';
@Component({
  selector: 'app-edit-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent implements OnInit {
  public title = 'Update course';
  public data!: courses;

  updateForm!: FormGroup;
  submitted: boolean = false;
  course: any;
  errorMessage: any;
  display: boolean = false;



  constructor(public formBuilder: FormBuilder,
    public courseService: CoursesService,
    protected activatedRoute: ActivatedRoute, private router: Router,
    private messageService: MessageService,) {
    this.createForm();
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      if (typeof params['id'] !== "undefined") {
        let id = Number.parseInt(params['id']);
        this.courseService.getCourses("https://jsonplaceholder.typicode.com/comments")
          .subscribe(
            response => {
              this.course = response;
              console.log(this.course);
            },
            error => {
              this.errorMessage = error.data.message;
            }
          );
      }
    });
  }

  public createForm() {
    this.updateForm = this.formBuilder.group({
      ID: ['', Validators.required],
      name: ['', Validators.required],
      number: ['', Validators.required],
    });
  }


  /*onSubmit(elementValues: any) {
     let id:number = this.course.id;
     this.submitted = false;
     let url ="https://jsonplaceholder.typicode.com/posts/1"
     let data:any = {
     "ID": elementValues.id,
     "name": elementValues.name,
     "number": elementValues.number,
     };

     this.courseService.update(url,data)
     .subscribe(
     result => {
     this.submitted = true;
     this.course = data;
     alert('success : course Updated ');
     },
     error => {
     this.submitted = true;
     this.errorMessage = error;
     }
     );
   }*/
  onSubmit(data: courses) {
    this.courseService.update('https://jsonplaceholder.typicode.com/posts/1', data)
      .subscribe((result) => {
        console.warn("result", result)
      })
    console.warn(data)
    this.display = false;


  }

  showDialog() {
    this.display = true;
  }


}




