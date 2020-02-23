import { Component, OnInit } from '@angular/core';
import { Character, CharacterTag, pronouns } from '../character/character';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new Character('name', CharacterTag.Player, 'N', 1);

  constructor() { }

  ngOnInit() {
  }

  goBack() { }

  submit(form: NgForm) {
    this.user = new Character(form.controls.playerName.value, CharacterTag.Player, form.controls.playerPronouns.value, form.controls.playerAppearance.value);
    // Added for testing purposes. May change later.
    alert(form.controls.playerPronouns.value + form.controls.playerName.value + form.controls.playerAppearance.value);
  }
}
