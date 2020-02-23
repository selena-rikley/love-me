import { CharacterTag } from '../character/character';
import { Choice } from '../choice/choice';

enum DialogType {
  DESCRIPTION,
  CHARACTER_DIALOG,
  CHOICE
}

enum DialogSplitter {
  CHOICE_LINE = ';',
  CHOICE_OPTION = '|',
  EFFECT = '/',
  EFFECT_VALUE = ':',
  TYPE = '=',
}

export class DialogText {
  type: DialogType;
  next: DialogText; // linked list
  text?: string;
  choices?: Choice[];
  character?: CharacterTag;

  // TODO: Add way to save

  constructor(type?: DialogType, next?: DialogText) {
    this.type = type;
    this.next = next;
  };
};

export function getDialog() {
    // TODO: Replace with actual dialog from something, maybe a file?
    const text = [
        'Description=You slowly open your eyes. It\'s too bright. You can hear someone speaking. Your head hurts.',
        'Freddie=Hey.',
        'Freddie=Are you awake?',
        'Freddie=Guys, \<pronoun\> \<is/are\> waking up!',
        'Freddie=How are you feeling?',
        'Choice="Where am I?"|Freddie:+1/Donalee:-1;"Who are you?";"I feel terrible.";"I feel okay.";Say nothing.|Freddie:-1'
      ];

    return createDialogTextList(text);
}

function createDialogTextList(text) {
  const start = new DialogText(); // Staring with an empty object
  let next = start;

  text.forEach(element => {
    const last = next;
    next = new DialogText();

    const [type, line] = element.split(DialogSplitter.TYPE);
    switch (type) {
    case 'Description':
        next.type = DialogType.DESCRIPTION;
        next.text = line;
        break;
    case 'Choice':
        next.type = DialogType.CHOICE;
        const choices = line.split(DialogSplitter.CHOICE_LINE);
        next.choices = createChoiceArray(choices);
        break;
    default:
        next.type = DialogType.CHARACTER_DIALOG;
        next.character = type as CharacterTag;
        next.text = line;
        break;
    }
    last.next = next;
  });
  return start;
}

function createChoiceArray(choices: string[]) {
  const choiceArray = [];
  choices.forEach(choice => {
    const [choiceText, choiceEffect] = choice.split(DialogSplitter.CHOICE_OPTION);
    const effectsArray = choiceEffect ? choiceEffect.split(DialogSplitter.EFFECT) : [];
    const choiceObject = new Choice(choiceText, getEffectMap(effectsArray));
    choiceArray.push(choiceObject);
  });
  return choiceArray;
}

function getEffectMap(effects: string[]) {
  const effectMap = new Map<CharacterTag, Number>();
  effects.forEach(effect => {
    const [characterTag, effectValue] = effect.split(DialogSplitter.EFFECT_VALUE);
    effectMap.set(characterTag as CharacterTag, Number(effectValue));
  });
  return effectMap;
}
