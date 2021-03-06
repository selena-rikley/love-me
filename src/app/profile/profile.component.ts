import { Component, OnInit } from '@angular/core';
import { Character, CharacterTag } from '../character/character';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new Character('', CharacterTag.Player, 'N', 1);

  constructor() { }

  ngOnInit() {
    console.log(localStorage.loveMeProfileCount);
    // Temporarily cleaning up
    while (Number(localStorage.loveMeProfileCount) > 0) {
      localStorage.removeItem('loveMeProfile' + Number(localStorage.loveMeProfileCount));
      localStorage.loveMeProfileCount = Number(localStorage.loveMeProfileCount) - 1;
    }
    console.log(this.user);
  }

  goBack() { }

  submit(form: NgForm) {
    this.user.updateUserProfile( form.controls.playerName.value, form.controls.playerPronouns.value, form.controls.playerAppearance.value);

    // Save new file in a temporary profile until user saves
    // (could also direct user to choose a save slot before/after this page)
    localStorage.loveMeProfileTemp = JSON.stringify(this.user);

    // Added for testing purposes. May change later. Checking that profile is saved into local storage
    console.log('Temporary profile saved ' + localStorage.loveMeProfileTemp);
  }
}
