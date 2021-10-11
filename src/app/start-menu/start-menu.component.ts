import { Component, OnInit } from '@angular/core';
import { SaveFileService } from '../load-save/savefile.service'

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  title = 'love-me';

  constructor(private saveFileService: SaveFileService) {}

  ngOnInit() {
    // Check for local storage support from browser.
    if (typeof(Storage) === 'undefined') {
      alert('WARNING! You browser does not support local storage. Some elements of the game may not be available on your current browser');
    };
  }

  startGame() {
    alert('new game started');
    this.saveFileService.sendIsLoadModeUpdate(false);
  }

  loadGame() {
    alert('go to load menu');
    this.saveFileService.sendIsLoadModeUpdate(true);
  }

  settings() {
    alert('go to settings menu');
  }

  exit() {
    alert('game closed');
  }
}
