import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter/chapter.service';
import { Character, createInitialCharacterMap, CharacterTag } from '../character/character';
import { CharacterStatsService } from '../character/character-stats.service';
import { getDialogForChapter } from '../dialog-box/dialog';
import { SaveFileService } from '../load-save/savefile.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
  providers: []
})
export class MainGameComponent implements OnInit {

  characterStats: Map<string, Character>;
  chapterContentXML: string;
  currentChapter: number;

  constructor(
    private characterStatService: CharacterStatsService,
    private chapterService: ChapterService,
    private saveFileService: SaveFileService
    ) {
    // Keep track of character stats
    characterStatService.characterStatsUpdate$.subscribe(
      characterEffects => {
        if (characterEffects != null) { this.setCharacterStats(characterEffects); }
      });
    // Keep track of chapter id
    chapterService.chapterUpdate$.subscribe(
      chapterId => {
        this.currentChapter = chapterId;
        getDialogForChapter(chapterId, this.chapterService);
        this.saveFileService.sendCurrentChapterIDUpdate(this.currentChapter);
      });
    // Keep track of current chapter dialog
    chapterService.chapterContentUpdate$.subscribe(
      chapterContentXML => {
        this.chapterContentXML = chapterContentXML;
      });
    
    
   }

  ngOnInit() {
    this.characterStats = createInitialCharacterMap();
    // this.currentChapter = 1;
    this.chapterService.sendChapterUpdate(1);
  }

  setCharacterStats(characterStats: Map<CharacterTag, number>) {
    console.log('setCharacterStats');
    characterStats.forEach((effectValue, characterTag) => {
      const oldEffectValue = this.characterStats.get(characterTag).friendPts;
      const newEffectValue = oldEffectValue.valueOf() + effectValue.valueOf();

      this.characterStats.get(characterTag).friendPts = newEffectValue;
      console.log(this.characterStats);
    });
    // this.saveFileService.setCharacterData(this.characterStats);
    this.saveFileService.sendCharacterDataUpdate(this.characterStats);
  }

  // getCharacterStats(characterTag: CharacterTag): Character {
  //   return this.characterStats.get(characterTag);
  // }

  loadMenu(){
    // Update Last Page when navigating
    this.saveFileService.sendLastPageUpdate('/main');
    this.saveFileService.sendIsLoadModeUpdate(true);
  }

  saveMenu(){
    // Update Last Page when navigating
    this.saveFileService.sendLastPageUpdate('/main');
    this.saveFileService.sendIsLoadModeUpdate(false);
  }
}
