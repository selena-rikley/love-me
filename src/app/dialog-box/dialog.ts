import { element } from 'protractor';
import { CharacterTag } from '../character/character';
import { Choice, ChoiceOptions } from '../choice/choice';

enum DialogType {
  DESCRIPTION = 'description',
  CHARACTER_DIALOG = 'speak',
  CHOICE = 'choice',
  CHOICES = 'choices'
}

enum DialogSplitter {
  CHOICE_LINE = ';',
  CHOICE_OPTION = '|',
  EFFECT = '/',
  EFFECT_VALUE = ':',
  TYPE = '=',
}

export class DialogText {
  id: number;
  type: DialogType;
  next: DialogText; // linked list
  text?: string;
  choices?: Choice[];
  character?: CharacterTag;
  nextID: number[];

  // TODO: Add way to save

  constructor(type?: DialogType, next?: DialogText) {
    this.type = type;
    this.next = next;
    this.nextID = [];
  }

  public setID(ID: number) {
    this.id = ID;
  }

  public setNextID(ID: number) {
    this.nextID.push(ID);
  }
}

// export function getDialog() {
//     // TODO: Replace with actual dialog from something, maybe a file?
//     const text = [
//         'Description=You slowly open your eyes. It\'s too bright. You can hear someone speaking. Your head hurts.',
//         'Freddie=Hey.',
//         'Freddie=Are you awake?',
//         'Freddie=Guys, \<pronoun\> \<is/are\> waking up!',
//         'Freddie=How are you feeling?',
//         'Choice="Where am I?"|Freddie:+1/Donalee:-1;"Who are you?";"I feel terrible.";"I feel okay.";Say nothing.|Freddie:-1'
//       ];

//     return createDialogTextList(text);
// }

export function getDialogFromXML(contentXML) {
  if (contentXML) {
    const dialogueElements = contentXML.getElementsByTagName('dialogue');

    const start = new DialogText(); // Staring with an empty object
    start.setNextID(1001);
    start.setID(1000);
    let next = start;

    console.log(dialogueElements);

    for (const dialogue of dialogueElements) {
      const last = next;
      next = new DialogText();

      const elementContent = dialogue.children[0];
      console.log(last.id + ', ' + last.nextID);

      next.type = elementContent.nodeName;

      switch (next.type) {
        default:
        case DialogType.DESCRIPTION:
          next.text = elementContent.textContent;
          next.setID(dialogue.id);
          next.setNextID(dialogue.children[1].textContent);
          break;
        case DialogType.CHARACTER_DIALOG:
          next.text = elementContent.textContent;
          next.character = elementContent.getAttribute('character') as CharacterTag;
          next.setID(dialogue.id);
          next.setNextID(dialogue.children[1].textContent);
          break;
        case DialogType.CHOICES:
          next.type = DialogType.CHOICE;
          next.setID(dialogue.id);

          next.choices = [];

          const choiceOptions = elementContent.children;
          // build choice array
          for (const choice of choiceOptions) {
            const choiceObject = new Choice();
            for (const element of choice.children) {
              switch (element.nodeName) {
                case ChoiceOptions.TEXT:
                  choiceObject.text = element.textContent;
                  break;
                case ChoiceOptions.NEXT_ID:
                  choiceObject.next = element.textContent;
                  next.setNextID(element.textContent)
                  break;
                case ChoiceOptions.STATUS_EFFECT_LIST:
                  const effectMap = new Map<CharacterTag, number>();
                  for (const effect of element.children) {
                    effectMap.set(effect.getAttribute('character') as CharacterTag, Number(effect.textContent))
                  }
                  choiceObject.characterEffects = effectMap;
                  break;
              }
            }
            next.choices.push(choiceObject);
          }
          break;
        }
      last.next = next;
    }
    return start;
  }
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
  const effectMap = new Map<CharacterTag, number>();
  effects.forEach(effect => {
    const [characterTag, effectValue] = effect.split(DialogSplitter.EFFECT_VALUE);
    effectMap.set(characterTag as CharacterTag, Number(effectValue));
  });
  return effectMap;
}

function loadXML(file, chapterContentService) {
  console.log('loadXML');
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log('Got file');
        // Typical action to be performed when the document is ready:
        const parser = new DOMParser();
        const chapterText = parser.parseFromString(xhttp.responseText.toString(), 'text/xml');
        chapterContentService.sendChapterContentUpdate(chapterText);
      }
  };
  xhttp.open('GET', file, true);
  xhttp.send();
}

export async function getDialogForChapter(chapterId, chapterContentService) {
  loadXML(`../../assets/dialog/${chapterId}.xml`, chapterContentService);
}
