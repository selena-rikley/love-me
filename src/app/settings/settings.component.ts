import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  volume: string;
  resolution: number;

  constructor() {
    this.volume = "50";
    this.resolution = 1080;
  }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    // Store this information somewhere to be used.

    // Added for testing purposes. May change later.
    alert('Volume: ' + form.controls.volume.value + '; Resolution: ' + form.controls.resolution.value);
  }

  reset(){
    alert('needs logic');
  }

  goBack(){}
}
