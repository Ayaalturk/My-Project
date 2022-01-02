import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/service/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from '../students.model';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css']
})
export class EditStudentDialogComponent implements OnInit {

  public title = 'Update User';

  studentId: number = -1;
  updateForm!: FormGroup;
  submitted: boolean = false;
  user: any;
  errorMessage: any;
  display: boolean = false;
  pageMode: 'edit' | 'add' = 'add';

  constructor(public formBuilder: FormBuilder,
    public studenesService: StudentsService,
    protected activatedRoute: ActivatedRoute,
    private router: Router) {
    //! dont put logic in constructors unless you really have to, keep them in angular's life cycle methods such as oninit
  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * @param studentId: number
   * @description this methods will be used by the parent component to display the selected student data
   */
  editStudent(studentId: number) {
    this.studentId = studentId;
    this.pageMode = 'edit';
    this.studenesService.getStudentById(studentId).subscribe((res: any) => {
      this.updateForm.patchValue(res[0]);
      this.display = true;
    });
  }

  addStudent() {
    this.pageMode = 'add';
    this.display = true;
  }

  public createForm() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }


  onSubmit(data: students) {

    /**
     * based on https://jsonplaceholder.typicode.com/guide/
     * When you're using their Put and post methods,
     * The resources will not be really updated on the server but it will be faked as if
     * so just check the returned results from the api
     */

    if (this.pageMode == 'edit') {
      this.studenesService.update(this.studentId, data)
        .subscribe((result) => {
          console.warn("result", result)
        })
    }
    else {
      // Post new data

    }

    this.display = false;
  }


  goList() {
    this.router.navigate(['student'])
  }

  showDialog() {
    this.display = true;
  }


}
