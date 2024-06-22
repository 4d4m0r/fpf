import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { Estudante, viewEstudante } from '../../_models/studentTypes';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Estudante[] = [];
  selectedStudent: Estudante = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    idade: 0,
    curso: '',
  };
  viewStudent: viewEstudante | null = null;

  @ViewChild(StudentFormComponent) studentFormComponent: StudentFormComponent | undefined;

  constructor(private studentService: ApiService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
    });
  }

  editStudent(student: Estudante) {
    this.selectedStudent = { ...student };
    if (this.studentFormComponent) {
      this.studentFormComponent.openModal();
    }
  }

  onStudentSaved() {
    this.getStudents();
  }

  deleteStudent(studentId: string) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.getStudents();
    });
  }

  showStudent(studentId: string) {
    this.studentService.showStudent(studentId).subscribe((student: viewEstudante) => {
      this.viewStudent = student;
    });
  }

  closeView() {
    this.viewStudent = null;
  }
}
