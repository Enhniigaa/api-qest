import { NgModule } from '@angular/core';
import { NgFor, } from '@angular/common';
import { OnInit } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { DetailsComponent } from './details/details.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { DeleteQuestionComponent } from './details/deleteQuestion.component';
import routeConfig from './routes';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionFormComponent,
    DetailsComponent,
    NewQuestionComponent,
    DeleteQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
