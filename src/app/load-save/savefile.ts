import { Character, createInitialCharacterMap } from '../character/character'
import { CharacterStatsService } from '../character/character-stats.service'
import { ChapterService } from '../chapter/chapter.service'
import { CharacterTag } from '../character/character'

export class SaveFile {
  Player: Character;
  Freddie: Character;
  Darian: Character;
  Donalee: Character;
  Renata: Character;
  Charlie: Character;
  Robot: Character;
  // CurrentChapter: number;
  // CurrentDialogID: number;
//  Scenes: Array<scene>;
//  [{SceneID: ; State: }]
//  Unlockables: Array

  //will need to add fields for game progresS
  constructor(player: Character, npcMap: Map<string, Character>) {
    this.Player = player;
    this.Freddie = npcMap.get('Freddie');
    this.Darian = npcMap.get('Darian');
    this.Donalee = npcMap.get('Donalee');
    this.Renata = npcMap.get('Renata');
    this.Charlie = npcMap.get('Charlie');
    this.Robot = npcMap.get('Robot');
  }

  public updateSaveFile(
    npcMap: Map<string, Character>
    ) {
    // A function to update user information when creating a new profile.
    this.Freddie = npcMap.get('Freddie');
    this.Darian = npcMap.get('Darian');
    this.Donalee = npcMap.get('Donalee');
    this.Renata = npcMap.get('Renata');
    this.Charlie = npcMap.get('Charlie');
    this.Robot = npcMap.get('Robot');
    console.log('states updated');
  }

  public updatePlayer(newPlayerInfo: Character){
    this.Player = newPlayerInfo;
    console.log("player updated: " + JSON.stringify(this.Player));
  }

  public updateNPCS(npcMap: Map<string,Character>){
    this.Freddie = npcMap.get('Freddie');
    this.Darian = npcMap.get('Darian');
    this.Donalee = npcMap.get('Donalee');
    this.Renata = npcMap.get('Renata');
    this.Charlie = npcMap.get('Charlie');
    this.Robot = npcMap.get('Robot');
  }

  public loadCharacterMap(save: string){
    const characterMap = createInitialCharacterMap();
    
    const savedData = JSON.parse(save);

    console.log(JSON.stringify(savedData.Player));
    this.updatePlayer(savedData.Player);
    // this.CurrentChapter = savedData.CurrentChapter;
    // this.CurrentDialogID = savedData.CurrentDialogID;

    // Load Data for Freddie
    console.log('loading Freddie');
    characterMap.get('Freddie').name = savedData.Freddie.name;
    characterMap.get('Freddie').id = savedData.Freddie.id;
    characterMap.get('Freddie').pronouns = savedData.Freddie.pronouns;
    characterMap.get('Freddie').appearance = savedData.Freddie.appearance;
    characterMap.get('Freddie').lovePts = savedData.Freddie.lovePts;
    characterMap.get('Freddie').friendPts = savedData.Freddie.friendPts;
    console.log(JSON.stringify(savedData.Freddie));

    // Load Data for Darian
    console.log('loading Darian');
    characterMap.get('Darian').name = savedData.Darian.name;
    characterMap.get('Darian').id = savedData.Darian.id;
    characterMap.get('Darian').pronouns = savedData.Darian.pronouns;
    characterMap.get('Darian').appearance = savedData.Darian.appearance;
    characterMap.get('Darian').lovePts = savedData.Darian.lovePts;
    characterMap.get('Darian').friendPts = savedData.Darian.friendPts;
    console.log(JSON.stringify(savedData.Darian));

    // Load Data for Donalee
    console.log('loading Donalee');
    characterMap.get('Donalee').name = savedData.Donalee.name;
    characterMap.get('Donalee').id = savedData.Donalee.id;
    characterMap.get('Donalee').pronouns = savedData.Donalee.pronouns;
    characterMap.get('Donalee').appearance = savedData.Donalee.appearance;
    characterMap.get('Donalee').lovePts = savedData.Donalee.lovePts;
    characterMap.get('Donalee').friendPts = savedData.Donalee.friendPts;
    console.log(JSON.stringify(savedData.Donalee));

    // Load Data for Renata
    console.log('loading Renata');
    characterMap.get('Renata').name = savedData.Renata.name;
    characterMap.get('Renata').id = savedData.Renata.id;
    characterMap.get('Renata').pronouns = savedData.Renata.pronouns;
    characterMap.get('Renata').appearance = savedData.Renata.appearance;
    characterMap.get('Renata').lovePts = savedData.Renata.lovePts;
    characterMap.get('Renata').friendPts = savedData.Renata.friendPts;
    console.log(JSON.stringify(savedData.Renata));

    // Load Data for Charlie
    console.log('loading Charlie');
    characterMap.get('Charlie').name = savedData.Charlie.name;
    characterMap.get('Charlie').id = savedData.Charlie.id;
    characterMap.get('Charlie').pronouns = savedData.Charlie.pronouns;
    characterMap.get('Charlie').appearance = savedData.Charlie.appearance;
    characterMap.get('Charlie').lovePts = savedData.Charlie.lovePts;
    characterMap.get('Charlie').friendPts = savedData.Charlie.friendPts;
    console.log(JSON.stringify(savedData.Charlie));

    // Load Data for Robot
    console.log('loading Robot');
    characterMap.get('Robot').name = savedData.Robot.name;
    characterMap.get('Robot').id = savedData.Robot.id;
    characterMap.get('Robot').pronouns = savedData.Robot.pronouns;
    characterMap.get('Robot').appearance = savedData.Robot.appearance;
    characterMap.get('Robot').lovePts = savedData.Robot.lovePts;
    characterMap.get('Robot').friendPts = savedData.Robot.friendPts;
    console.log(JSON.stringify(savedData.Robot));

    console.log('Characters loaded!')
    
    return characterMap;
  }

}
