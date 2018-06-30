import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  dialog: string[];
  displayedDialog: string;
  characterName: string;
  iterator: number;
  choices: string[];

  constructor() { }

  ngOnInit() {
    this.dialog = [];
    this.choices = [];
    this.iterator = 0;
    this.populateDialogObject();
    this.displayedDialog = this.dialog[this.iterator];
    this.characterName = 'Selena'; // TODO: link this up with the dialog, maybe use a different data object
    this.choices.push('This is a choice');
    this.choices.push('This is another choice');
    this.choices.push('You will regret this choice');
    this.choices.push('1/2 developers like this choice');
  }

  populateDialogObject() {
    // TODO: Replace with actual dialog from something, maybe a file?
    this.dialog.push('This is a line of dialog');
    this.dialog.push('This is another line of dialog');
  }

  nextLine() {
    // TODO: Add better logic for moving to next line of dialog
    this.iterator = (this.iterator + 1) % 2;
    this.displayedDialog = this.dialog[this.iterator];
  }

}
