export class Character {
  id: CharacterTag;
  name: string;
  pronouns: string;
  appearance: number;
  lovePts: number;
  friendPts: number;

  constructor(name: string, id: CharacterTag, pronouns: string, appearance: number) {
    this.name = name;
    this.id = id;
    this.lovePts = 0;
    this.friendPts = 0;
    this.pronouns = pronouns;
    this.appearance = appearance;
  }

  public updateUserProfile(newName: string, newPronouns: string, newAppearance: number) {
    // A function to update user information when creating a new profile.
    this.name = newName;
    this.pronouns = newPronouns;
    this.appearance = newAppearance;
  }

  public setLovePts(newPoints: number) {
    this.lovePts = newPoints;
  }

  public getLovePts() {
    return this.lovePts;
  }

  public setFriendPts(newPoints: number) {
    this.friendPts = newPoints;
  }

  public getFriendPts() {
    return this.friendPts;
  }
}

export function createInitialCharacterMap() {
  const characterMap = new Map<string, Character>();
  Object.keys(CharacterTag).forEach(characterTag => {
    if (characterTag !== 'Player') {
      const character = new Character(characterTag, characterTag as CharacterTag, 'N', 1);
      characterMap.set(characterTag, character);
    }
  });

  return characterMap;
}

export enum CharacterTag {
  Freddie = 'Freddie',
  Darian = 'Darian',
  Donalee = 'Donalee',
  Renata = 'Ren',
  Charlie = 'Charlie',
  Robot = 'Robot',
  Player = 'You'
}

export enum Pronouns {
    male = 'M',
    female = 'F',
    neutral = 'N'
}
