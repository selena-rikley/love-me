import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { SaveFile } from './savefile'
import { Character, CharacterTag, createInitialCharacterMap } from '../character/character'
import { CharacterStatsService } from '../character/character-stats.service'
import { ChapterService } from '../chapter/chapter.service'

@Injectable({
  providedIn: 'root'
})
export class SaveFileService {
  private sessionCharacterMap = createInitialCharacterMap();
  private playerCharacter = new Character('', CharacterTag.Player, 'N', 1);

  private lastPageRouterLink = new BehaviorSubject<string>('/start');
  private playerDataShared = new BehaviorSubject<Character>(this.playerCharacter);
  private isLoadMode = new BehaviorSubject<boolean>(true);
  private characterDataShared = new BehaviorSubject<Map<string, Character>>(this.sessionCharacterMap);
  private currentChapterID = new BehaviorSubject<number>(1);
  private currentDialogID = new BehaviorSubject<number>(1001)
  
  private gameFile = new SaveFile(this.playerDataShared.value, this.characterDataShared.value);

  // saveSlotID: number;
  savedData: SaveFile;
  /* Expect this to follow something like:
    { "Player":
        {id: CharacterTag; name: string;  pronouns: string;  appearance: number;
        lovePts: number; friendPts: number;}
      "Donalee":
        {id: CharacterTag; name: string;  pronouns: string;  appearance: number;
        lovePts: number; friendPts: number;}
      "Darian":
        {id: CharacterTag; name: string;  pronouns: string;  appearance: number;
        lovePts: number; friendPts: number;}
      "Current Scene": {CurrentChpt: number, CurrentSceneID: number, DialogID: number};
      "CompletedScenes:"
      "Completed Tasks"
      "Unlockables"
    }
   */

  constructor(
    private characterStatService: CharacterStatsService,
    private chapterService: ChapterService
  ) {}

  // Observable string streams
  updateLastPage$ = this.lastPageRouterLink.asObservable();
  updatePlayerCharacterData$ = this.playerDataShared.asObservable();
  updateSaveLoadPageMode$ = this.isLoadMode.asObservable();
  updateCharacterDataShared$ = this.characterDataShared.asObservable();
  updateCurrentChapterID$ = this.currentChapterID.asObservable();
  updateCurrentDialogID$ = this.currentDialogID.asObservable();

  // Service message commands
  sendLastPageUpdate(pagePath: string) {
    this.lastPageRouterLink.next(pagePath);
  }

  sendPlayerCharacterUpdate(updatedCharacter: Character) {
    this.playerDataShared.next(updatedCharacter);
    this.gameFile.updatePlayer(updatedCharacter);
  }

  sendIsLoadModeUpdate(load: boolean) {
    this.isLoadMode.next(load);
  }

  sendCharacterDataUpdate(newCharacterData: Map<string, Character>) {
    console.log('character data being set!!!');
    this.characterDataShared.next(newCharacterData);
    console.log(this.characterDataShared);
    this.gameFile.updateNPCS(newCharacterData);
  }

  sendCurrentChapterIDUpdate(newChapterID: number) {
    this.currentChapterID.next(newChapterID);
  }

  sendCurrentDialogIDUpdate(newDialogID: number) {
    this.currentDialogID.next(newDialogID);
  }

  saveGame(saveSlot: number) {
    //Write the current savefile data to a savefile
//    localStorage.testingSaves = JSON.stringify(this.gameFile);
    localStorage.setItem("testingTemp" + saveSlot, JSON.stringify(this.gameFile));
    console.log('Saving game file: ' + JSON.stringify(this.gameFile));
    console.log('local storage: '+ localStorage.getItem('testingTemp'+saveSlot));  
  }

  loadGame(saveSlot: number){
    //Load game data from save slot
    console.log(`loveme_saveslot${saveSlot}`);

    // update session character map with loaded data
    this.characterDataShared.next(this.gameFile.loadCharacterMap(localStorage.getItem('testingTemp'+saveSlot)));
  }
}
