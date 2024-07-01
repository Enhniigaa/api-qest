import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss'
})
export class QuestionFormComponent {
    @Input() question!: Question

}
