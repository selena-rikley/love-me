import { Component, OnInit, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { DialogText, getDialogForChapter, getDialogFromXML } from './dialog';
import { Choice } from '../choice/choice';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  @Input() xmlContent;

  dialog: DialogText;
  displayedDialog: string;
  characterName: string;
  iterator: number;
  choices: Choice[];
  content;
  description: boolean;
  userChoice: boolean;

  constructor() { }

  ngOnInit() {
    this.choices = [];
    this.iterator = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'xmlContent': {
            this.dialog = getDialogFromXML(changes['xmlContent'].currentValue);
          }
        }
      }
    }
  }

  makeChoice() {
    this.userChoice = false;
    this.nextLine();
  }

  nextLine() {
    // TODO: Add better logic for moving to next line of dialog
    if (this.dialog.next) {
      this.dialog = this.dialog.next;
      // Leave last piece of dialogue/narration on the screen for choice
      if (this.dialog.choices === undefined) {
        this.displayedDialog = this.dialog.text;
        this.characterName = this.dialog.character;
      }
      this.choices = this.dialog.choices;
    }

    if (this.choices !== undefined) {
      this.userChoice = true;
    } else {
      this.userChoice = false;
      if ((this.characterName === undefined)) {
        this.description = true;
      } else {
        this.description = false;
      }
    }

  }
}
