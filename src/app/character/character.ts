export class Character {
  lovePts: Number;
  friendPts: Number;
  name: string;
  pronoun: string;
  id: CharacterTag;

  constructor(name: string, id: CharacterTag, pronoun: string) {
    this.name = name;
    this.id = id;
    this.lovePts = 0;
    this.friendPts = 0;
    this.pronoun = pronoun;
  };
};

export function createInitialCharacterMap() {
  let characterMap = new Map<string, Character>();
  
  Object.keys(CharacterTag).forEach(characterTag => {
    if (characterTag != 'Player') {
      const character = new Character(characterTag, characterTag as CharacterTag, 'N');
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

export enum pronouns {
    male = 'M',
    female = 'F',
    neutral = 'N'
}
