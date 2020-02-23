import { Component, OnInit } from '@angular/core';
import { DialogText, getDialog } from './dialog';
import { Choice } from '../choice/choice';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  dialog: DialogText;
  displayedDialog: string;
  characterName: string;
  iterator: number;
  choices: Choice[];

  constructor() { }

  ngOnInit() {
    this.choices = [];
    this.iterator = 0;
    this.dialog = getDialog();
  }

  nextLine() {
    // TODO: Add better logic for moving to next line of dialog
    if (this.dialog.next) {
      this.dialog = this.dialog.next;
      this.displayedDialog = this.dialog.text;
      this.characterName = this.dialog.character;  
      this.choices = this.dialog.choices;
    }
  }
}
