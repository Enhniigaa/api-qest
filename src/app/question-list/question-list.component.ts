import { Component, inject } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { NewQuestionComponent } from '../new-question/new-question.component';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent {
    questionList: Question[] = []
    questionService: QuestionService = inject(QuestionService)
    filteredQuestionList: Question[] = [];
    constructor() {
      this.questionService.getQuestions().then((questionList: Question[]) => {
        this.questionList = questionList
        this.filteredQuestionList =questionList
      }).catch((err) => {
        console.log('Error doing fetches' ,err)
      }) 
    }
    filterResults(text: string) {
      if(!text) {
        this.filteredQuestionList = this.questionList
        return;
      }

      this.filteredQuestionList = this.questionList.filter(questionList => questionList?.name.toLowerCase().includes(text.toLowerCase()))
    }

  }
