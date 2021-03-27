
import { CharacterTag } from '../character/character';

export enum ChoiceOptions {
  TEXT= 'text',
  NEXT_ID= 'nextId',
  STATUS_EFFECT_LIST= 'statusEffects'
}

export class Choice {
  text: string;
  characterEffects?: Map<CharacterTag, number>;
  next: string;
  constructor(text?: string, characterEffects?: Map<CharacterTag, number>) {
      this.text = text;
      this.characterEffects = characterEffects;
  }
}
