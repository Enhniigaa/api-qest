import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
    deleteConfirm: boolean= false
    route: ActivatedRoute = inject(ActivatedRoute)
    QuestionService = inject(QuestionService)
    question: Question | undefined

  constructor() {
    const questionId =parseInt(this.route.snapshot.params['id'], 10)
    this.QuestionService.getQuestion(questionId).then(questionList => {
      this.question =questionList
    })


  }
  submitAnswer(answer: string) {
    const isCorrect = answer.trim() === this.question?.answer.trim()
    alert(isCorrect)
  }

  editChanges():void {
    
  }

  
}