import { Component, OnInit } from '@angular/core';
import { Character, CharacterTag, pronouns } from '../character/character';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  submitted = false;
  user = new Character('name', CharacterTag.Player, pronouns.neutral);

  constructor() { }

  ngOnInit() {
  }

  goBack() {}

  onSubmit() { this.submitted = true; }

  submit(name: string, gender: pronouns) {
    this.user = new Character(name, CharacterTag.Player, gender);
    // Added for testing purposes. May change later.
    return this.user;
  }
}
