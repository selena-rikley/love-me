import { Component, OnInit } from '@angular/core';
import { Character, characterTag } from '../character/character';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new Character('name', characterTag.Player);

  constructor() { }

  ngOnInit() {
  }

  goBack() {}

  submit(name: string, pronoun: string) {
    this.user = new Character(name, characterTag.Player);
    alert(this.user.name);
  }
}
