import { Injectable } from '@angular/core';
import { courses } from '../courses/courses.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 

  constructor() { }
  private avilableCourseList:courses[]=[];


  public getAvailableCourse=()=>{
    return this.avilableCourseList;
  }

  public setAvilableCourse=(course:courses)=>{
    this.avilableCourseList.push(course);
    
  }
}
