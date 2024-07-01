import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  questionList: Question[] = []
  readonly url =  'http://localhost:3000/informations'
  
  
  // Get all question forms
 async getQuestions(): Promise<Question[]> {
      const data = await fetch(this.url)
      return await data.json() ?? []
  }

  // Get selected question form
 async getQuestion(id: number): Promise<Question | undefined> {
    const data =await fetch(`${this.url}/${id}`)
    return await data.json() ?? []
  }

  // submt answer for the question
  submitAnswer(answer: string) {
  }

  // Create new question 
  createQuestion(newQuestion: Question): void {
    
  }

  // Edit question
  constructor() {}
}
