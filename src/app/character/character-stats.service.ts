import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CharacterTag } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterStatsService {

  constructor() { }

  // Observable string sources
  private characterStatsUpdateSource = new Subject<Map<CharacterTag, number>>();

  // Observable string streams
  characterStatsUpdate$ = this.characterStatsUpdateSource.asObservable();

  // Service message commands
  sendCharacterStatsUpdate(characterEffects: Map<CharacterTag, number>) {
    this.characterStatsUpdateSource.next(characterEffects);
  }
}
