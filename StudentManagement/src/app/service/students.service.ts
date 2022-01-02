import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { students } from '../students/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(public httpClient: HttpClient,) { }

  getusers(url: string) {
    return this.httpClient.get(url)
      .pipe(
        map(res => res)
      );
  }

  getStudentById(studentId: number) {
    //! keep your api end-point in the enviroment this will help you when you're targeting Dev back-end or production back-end
    return this.httpClient.get(`${environment.apiUrl}/users?id=${studentId}`);
  }

  public update(studentId: number, data: students) {
    return this.httpClient
      .put(`${environment.apiUrl}/users/${studentId}`, JSON.stringify(data), { headers: { 'Content-type': 'application/json; charset=UTF-8' } })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
