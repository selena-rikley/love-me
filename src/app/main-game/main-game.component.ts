import { Component, OnInit } from '@angular/core';
import { Character, createInitialCharacterMap, CharacterTag } from '../character/character';
import { CharacterStatsService } from '../character/character-stats.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
  providers: [CharacterStatsService]
})
export class MainGameComponent implements OnInit {

  characterStats: Map<string, Character>

  constructor(private characterStatService: CharacterStatsService) {
    characterStatService.characterStatsUpdate$.subscribe(
      characterEffects => {
        this.setCharacterStats(characterEffects);
      });
   }

  ngOnInit() {
    this.characterStats = createInitialCharacterMap();
  }

  setCharacterStats(characterStats: Map<CharacterTag, Number>) {
    characterStats.forEach((effectValue, characterTag) => {
      const oldEffectValue = this.characterStats.get(characterTag).friendPts;
      const newEffectValue = oldEffectValue.valueOf() + effectValue.valueOf();

      this.characterStats.get(characterTag).friendPts = newEffectValue;
      console.log(this.characterStats);
    })
  }

  getCharacterStats(characterTag: CharacterTag) : Character {
    return this.characterStats.get(characterTag);
  }
}
