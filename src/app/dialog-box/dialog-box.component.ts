import { Component, OnInit, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { DialogText, getDialogForChapter, getDialogFromXML } from './dialog';
import { Choice } from '../choice/choice';
import { DialogService } from './dialog.service';
import { SaveFileService } from '../load-save/savefile.service';

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
  nextID: number[];

  constructor(
    private dialogService: DialogService,
    private saveFileService: SaveFileService
  ) {
    // Subscribe to see current chapter id
    this.saveFileService.updateCurrentChapterID$.subscribe(value => {
      console.log('current chapter id updated');
    });

    // Subscribe to see updated dialog id
    this.saveFileService.updateCurrentDialogID$.subscribe(value => {
      console.log('current dialog id updated' + value);
      this.nextID = [value];
    });
  }

  ngOnInit() {
    this.choices = [];
    this.iterator = 0;
//    this.nextID = [1001];
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
    this.nextID = [this.dialogService.getDialogUpdate()];
    this.userChoice = false;
    this.nextLine();
    console.log(this.nextID[0]);
  }

  nextLine() {
    // TODO: Add better logic for moving to next line of dialog
    // Check that there exists another piece of dialog
    if (this.dialog.next) {
      this.dialog = this.dialog.next;
      // Leave last piece of dialogue/narration on the screen for choice
      if(parseInt(this.dialog.id.toString(), 10) === parseInt(this.nextID[0].toString(), 10)) {
        if (this.dialog.choices === undefined) {
          this.displayedDialog = this.dialog.text;
          this.characterName = this.dialog.character;
          this.nextID = this.dialog.nextID;
        }
        this.choices = this.dialog.choices;

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
      } else {
        this.nextLine();
      }
    }
  }  
}
