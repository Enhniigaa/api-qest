import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { QuestionListComponent } from "./question-list/question-list.component";
import { NewQuestionComponent } from "./new-question/new-question.component";
import { DeleteQuestionComponent } from "./details/deleteQuestion.component";


const routeConfig: Routes = [
    { 
        path: 'question/:id',
        component: DetailsComponent,
        title: "Question"
    },
    { path: '',
        component: QuestionListComponent,
        title: "Questions"
    },
    { path: 'newQuestion',
        component: NewQuestionComponent,
        title: "Create new question "
    },
    { path: 'deleteQuestion',
        component: DeleteQuestionComponent,
        title : "delete question"
    }
]

export default routeConfig;