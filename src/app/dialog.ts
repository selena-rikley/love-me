import * as CharacterUtils from './character/character';

export class DialogText {
    type: DialogType;
    next: DialogText; // linked list?
    text?: string;
    choices?: Choice[];
    character?: CharacterUtils.CharacterTag;
    // TODO: Add way to save

    constructor(type?: DialogType, next?: DialogText) {
        this.type = type;
        this.next = next;
    };

};

export class Choice {
    text: string;
    characterEffects?: Map<CharacterUtils.CharacterTag, Number>;
}

export enum DialogType {
    DESCRIPTION,
    CHARACTER_DIALOG,
    CHOICE
}
