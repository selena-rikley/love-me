import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterTag } from '../character/character';
import { Choice } from './choice';

import { CharacterStatsService } from '../character/character-stats.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  choice: Choice;
  private _show: boolean;

  constructor(private characterStatsService: CharacterStatsService) {
  }

  @Input() set option(choice: Choice) {
    if (choice) {
      this._show = true;
      this.choice = choice;
    } else {
      this._show = false;
    }
  }

  get show() {
    return this._show
  }

  ngOnInit() { }
  
  optionClick () {
    console.log(this.choice)
    this.characterStatsService.sendCharacterStatsUpdate(this.choice.characterEffects);
    // TODO: Move to next dialog
    alert('Your choice could have consequences'); 
  }
}
