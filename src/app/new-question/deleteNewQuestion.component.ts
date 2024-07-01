import { Component, inject } from "@angular/core";
import { NewQuestionComponent } from "./new-question.component";

@Component({
    selector: 'app-delete-new-question',
    template: `
     <main>
        <div class="confirm-delete">
            <div class="header">
                <h2>confirm-delete</h2>
            </div>
            <div class="message">
            <p>Are you sure to delete your changes?</p>
            <p>changes will lost.</p>
            </div>

            <div class="button-row">
                <button class="cancel" (click)="onConfirm()" >Cancel</button>
                <button class="confirm" (click)="onCancel()">Delete</button>
            </div>
        </div>
    </main>
    `

})

export class DeleteNewQuestionComponent {
    constructor() { }
    onConfirm():void {


    }

    onCancel():void {

    }

}