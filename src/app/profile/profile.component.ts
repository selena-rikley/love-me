import { Component, OnInit } from '@angular/core';
import { Character, CharacterTag, pronouns } from '../character/character';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new Character('name', CharacterTag.Player, pronouns.neutral);

  constructor() { }

  ngOnInit() {
  }

  goBack() {}

  submit(name: string, gender: pronouns, volume: string) {
    this.user = new Character(name, CharacterTag.Player, gender);
    alert(volume);
    // Added for testing purposes. May change later.
    return this.user;
  }
}
