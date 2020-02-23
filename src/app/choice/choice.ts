
import { CharacterTag } from '../character/character';

export class Choice {
  text: string;
  characterEffects?: Map<CharacterTag, Number>;
  constructor(text, characterEffects) {
      this.text = text;
      this.characterEffects = characterEffects;
  }
}