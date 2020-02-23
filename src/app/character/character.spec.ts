import { createInitialCharacterMap, CharacterTag } from './character';

describe('createInitialCharacterMap', () => {
  it('should create a map of string => characters', () => {
    const cMap = createInitialCharacterMap();
    expect(cMap.get(CharacterTag.Freddie)).toBeDefined();
    expect(cMap.get(CharacterTag.Charlie)).toBeDefined();
  });

  it('should not include the player character', () => {
    const cMap = createInitialCharacterMap();
    expect(cMap.get(CharacterTag.Player)).not.toBeDefined();
  });
});