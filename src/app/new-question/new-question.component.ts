import { Component } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrl: './new-question.component.scss'
})
export class NewQuestionComponent {
    title = "new-question";
    questionList : Question[] = [
      {
        id: 3,
        name: "integer",
        type: "Multiple",
        person_type: "employer",
        question: "there is an array of numbers. Sort them and find the middle or median of that array of integer",
        answer: "use the sort() method and find its length"
      },
    ];
    newQuestion: Question = { id: 0, name: '', type: "Multiple" || "Single" || "Input", person_type: '', question: '', answer: ''}

    formError = false

    constructor(
      private questionService: QuestionService,
    ) {}
  
    isFormValid():boolean {
      return !!this.newQuestion.name && !!this.newQuestion.person_type && !!this.newQuestion.question && !!this.newQuestion.answer;
    }

    onSave(): void {

    }

    onDelete(): void {
      
    }

}
