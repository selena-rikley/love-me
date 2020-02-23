import { Component, OnInit } from '@angular/core';
import { Character, createInitialCharacterMap } from '../character/character';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit {

  characterStats: Map<string, Character>

  constructor() { }

  ngOnInit() {
    this.characterStats = createInitialCharacterMap();
  }

}
