import { Component, Inject } from "@angular/core";


@Component({
    selector:  'app-confirm',
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
    `,
    styles: [`
       main {
        width: 50%;
        height: 50%;
       }
        `]

})


export class DeleteQuestionComponent {


    constructor() {}
    
    onConfirm():void {

    }

    onCancel():void {

    }
    
}