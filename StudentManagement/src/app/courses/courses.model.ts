import { students } from "../students/students.model";

export interface courses {
  ID: number;
  name: string;
  Availability: string;
  students: students[];
}






