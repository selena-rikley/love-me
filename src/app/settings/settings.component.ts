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
    if (localStorage.loveMeVolume && localStorage.loveMeResolution) {
      // If settings have been set previously, get saved settings from local storage
      this.volume = localStorage.loveMeVolume;
      this.resolution = Number(localStorage.loveMeResolution);
    } else {
      this.volume = '50';
      this.resolution = 1080;
    }

  }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    // Store settings in local storage.
    localStorage.loveMeVolume = form.controls.volume.value;
    localStorage.loveMeResolution = form.controls.resolution.value;

    // Added for testing purposes. May change later.
    console.log('Volume: ' + localStorage.getItem('loveMeVolume') + '; Resolution: ' + localStorage.getItem('loveMeResolution'));
  }

  reset() {
    // does not update local storage values
    this.volume = '50';
    this.resolution = 1080;
    console.log('defaults have been restored, press save to keep changes');
  }

  goBack() {
    // Will not save changes (even if reset is clicked)
    // Undo any adjustments that have not been saved
    if (localStorage.loveMeVolume !== this.volume) {
      this.volume = localStorage.loveMeVolume;
    }
    if (localStorage.loveMeResolution !== this.resolution) {
      this.resolution = Number(localStorage.loveMeResolution);
    }
    console.log('Your changes may not be saved.');
  }
}
