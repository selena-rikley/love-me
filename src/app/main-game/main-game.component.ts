import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit {

  actData: Object;
  sceneData: Object;

  constructor() { }

  ngOnInit() {
    this.loadAct(1);
    this.loadScene(1);
  }

  loadAct(act: number) {
    this.actData = require(`../lib/dialog${act}.json`);
  }

  loadScene(scene: number) {
    // TODO: Get pictures?
    // TODO: Get dialog
    console.log(this.actData[`scene${scene}`]);
  }

  getDialog(scene: number) {

  }

}
