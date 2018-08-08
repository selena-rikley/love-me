import { Component, OnInit } from '@angular/core';
import * as DialogUtils from '../dialog';
import * as CharacterUtils from '../character/character';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  dialog: DialogUtils.DialogText;
  displayedDialog: string;
  characterName: string;
  iterator: number;
  choices: string[];

  constructor() { }

  ngOnInit() {
    this.choices = [];
    this.iterator = 0;
    this.dialog = this.populateDialogList();
  }

  populateDialogList() {
    // TODO: Replace with actual dialog from something, maybe a file?
    const text = [
      'Description=You slowly open your eyes. It\'s too bright. You can hear someone speaking. Your head hurts.',
      'Freddie=Hey.',
      'Freddie=Are you awake?',
      'Freddie=Guys, \<pronoun\> \<is/are\> waking up!',
      'Freddie=How are you feeling?',
      'Choice="Where am I?"|Freddie:+1/Donalee:-1;"Who are you?";"I feel terrible.";"I feel okay.";Say nothing.|Freddie/-1'
    ];

    const start = new DialogUtils.DialogText(); // Staring with an empty object
    let next = start;
    let line;
    text.forEach(element => {
      const last = next;
      next = new DialogUtils.DialogText();
      line = element.split('=');
      switch (line[0]) {
        case 'Description':
          next.type = DialogUtils.DialogType.DESCRIPTION;
          next.text = line[1];
          break;
        case 'Choice':
          next.type = DialogUtils.DialogType.CHOICE;
          const choices = line[1].split(';');
          next.choices = this.createChoiceArray(choices);
          break;
        default:
          next.type = DialogUtils.DialogType.CHARACTER_DIALOG;
          next.character = line[0] as CharacterUtils.CharacterTag;
          next.text = line[1];
          break;
      }
      last.next = next;
    });

    return start;
  }

  createChoiceArray(choices: string[]) {
    const choiceArray = [];
    choices.forEach(choice => {
      const choiceObject = new DialogUtils.Choice();
      const splitLine = choice.split('|');
      choiceObject.text = splitLine[0];
      const effects = splitLine[1] ? splitLine[1].split('/') : [];
      choiceObject.characterEffects = this.parseEffects(effects);
      choiceArray.push(choiceObject);
    });
    return choiceArray;
  }

  parseEffects(effects: string[]) {
    const effectMap = new Map<CharacterUtils.CharacterTag, Number>();
    effects.forEach(effect => {
      const pair = effect.split(':');
      effectMap[pair[0]] = Number(pair[1]);
    });
    return effectMap;
  }

  nextLine() {
    // TODO: Add better logic for moving to next line of dialog
    this.dialog = this.dialog.next;
    this.displayedDialog = this.dialog.text;
  }

}
