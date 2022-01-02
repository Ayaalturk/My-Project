import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, } from '@angular/core';
import { courses } from 'src/app/courses/courses.model';
import { SharedService } from 'src/app/service/shared.service';
import { StudentsService } from 'src/app/service/students.service';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.css']
})
export class StudentsListViewComponent implements OnInit {
  public users: any;
  @ViewChild("editDialog", { read: ViewContainerRef }) container: any;
  Available!: courses[];
  isLoading = false;
  private componentRef!: ComponentRef<EditStudentDialogComponent>;

  constructor(public studentsService: StudentsService, public sharedService: SharedService, private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.studentsService.getusers('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        result => {
          this.isLoading = false;
          let response: any = result;
          this.users = response;
        },
        error => {
          console.log(error);
        });

    this.Available = this.sharedService.getAvailableCourse()
  }

  editStudent(studentID: number) {
    const factory: ComponentFactory<EditStudentDialogComponent> = this.resolver.resolveComponentFactory(EditStudentDialogComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.editStudent(studentID);
  }

  addStudent() {

    // check this ref on how to create dynamic components https://www.c-sharpcorner.com/article/how-to-create-dynamic-components-in-angular-application/
    const factory: ComponentFactory<EditStudentDialogComponent> = this.resolver.resolveComponentFactory(EditStudentDialogComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.addStudent();
  }
}






