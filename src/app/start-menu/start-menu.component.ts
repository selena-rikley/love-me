import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  title = 'love-me';

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    alert('new game started');
  }

  loadGame() {
    alert('go to load menu');
  }

  settings() {
    alert('go to settings menu');
  }

  exit() {
    alert('game closed');
  }
}
