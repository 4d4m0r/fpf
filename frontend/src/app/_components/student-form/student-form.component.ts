import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { Estudante } from '../../_models/studentTypes';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Input() student: Estudante = { id: '', nome: '', email: '', senha: '', idade: 0, curso: '' };
  @Output() studentSaved = new EventEmitter<void>();

  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit(form: any) {
    const estudante: Estudante = { ...this.student, ...form.value };
    if (estudante.id) {
      this.apiService.editStudent(estudante).subscribe(response => {
        console.log('Estudante atualizado com sucesso!', response);
        this.studentSaved.emit();
        this.closeModal();
      }, error => {
        console.error('Erro ao atualizar o estudante', error);
      });
    } else {
      this.apiService.addStudent(estudante).subscribe(response => {
        console.log('Estudante adicionado com sucesso!', response);
        this.studentSaved.emit();
        this.closeModal();
      }, error => {
        this.errorMessage = 'Estudante já existe!'
        console.error('Estudante já existe!', error);
      });
    }
  }

  openModal() {
    const modalElement = document.getElementById('studentFormModal');
    if (modalElement) {
      modalElement.style.display = 'block';
      modalElement.classList.add('show');
    }
  }

  closeModal() {
    const modalElement = document.getElementById('studentFormModal');
    if (modalElement) {
      modalElement.style.display = 'none';
      modalElement.classList.remove('show');
    }
  }
}
