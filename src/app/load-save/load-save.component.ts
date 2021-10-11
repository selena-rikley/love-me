import { Component, OnInit } from '@angular/core';
import { SaveFileService } from './savefile.service'
import { CharacterStatsService } from '../character/character-stats.service'
import { Character } from '../character/character'
import { ChapterService } from '../chapter/chapter.service'
import { SaveFile } from './savefile'

@Component({
  selector: 'app-load-save',
  templateUrl: './load-save.component.html',
  styleUrls: ['./load-save.component.css']
})
export class LoadSaveComponent implements OnInit {
  currentGameState: SaveFile;
  pageModeTitle: string;
  isLoadMode: boolean;
  selectedSaveSlot: number;
  showConfirmation: boolean;
  characterMap: Map<string,Character>;
  lastpage: string;

  gamefile: SaveFile;

  constructor(
    private saveFileService: SaveFileService,
    private characterStatsService: CharacterStatsService,
    private chapterService: ChapterService
  ) {
    // Subscribe to get last page router link for back navigation
    this.saveFileService.updateLastPage$.subscribe(value => {
      console.log(value);
      this.lastpage = value;
    });

    // Subscribe to see what page mode should be used
    this.saveFileService.updateSaveLoadPageMode$.subscribe(value => {
      this.isLoadMode = value;
      if (value) {
        this.pageModeTitle = 'Load Game';
      } else { this.pageModeTitle = 'Save Game';}
      console.log('Is page mode load: ' + value);
    });

    // Subscribe to see updated npc character data
    this.saveFileService.updateCharacterDataShared$.subscribe(value => {
      console.log('save service' + JSON.stringify(value));
      this.characterMap = value;
      for (let pair of this.characterMap.entries()){
        console.log(pair[0],pair[1]);
      }
    });

    // // Subscribe to see current chapter id
    // this.saveFileService.updateCurrentChapterID$.subscribe(value => {
    //   console.log('current chapter id updated');
    //   this.gamefile.CurrentChapter = value;
    // });

    // // Subscribe to see updated dialog id
    // this.saveFileService.updateCurrentDialogID$.subscribe(value => {
    //   console.log('current dialog id updated');
    //   this.gamefile.CurrentDialogID = value;
    // });
  }

  ngOnInit(): void {
    this.showConfirmation = false;
  }

  confirmSave(slotID: number){
    if (!this.showConfirmation){
      this.selectedSaveSlot = slotID;
      this.showConfirmation = true;
    }
  }

  cancel(){
    this.showConfirmation = false;
    console.log(this.lastpage);
  }

  save(){
//      localStorage.testingTemp = JSON.stringify(this.saveFileService.getCharacterData());
      for (let pair of this.characterMap){
        console.log(pair[0],pair[1]);
      }
      console.log('Saving...')// + this.selectedSaveSlot + " " + localStorage.testingTemp);
      this.saveFileService.saveGame(this.selectedSaveSlot);
//      console.log(this.saveFileService.getCharacterData());
  }

  loadSave(slotID: number){
    //get data from appropriate save slot0
    console.log('loading data...');
    this.saveFileService.loadGame(slotID);
    console.log('save loaded');
  }
}
