import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {
  public students:any;
  isLoading = false;


  constructor(public studentsService:StudentsService,
    private router:Router ) {
  
  }

  

  ngOnInit(): void {
    this.isLoading =true;
    this.studentsService.getusers('https://jsonplaceholder.typicode.com/users')
    .subscribe(
    result => {
     this.isLoading =false;
     let response:any = result;
     this.students = response; 
    },
    error => {
    console.log(error);
    });
  }

  
}
    

    


