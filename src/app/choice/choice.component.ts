import { Component, Input, OnInit } from '@angular/core';
import { Choice } from './choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  private text: string;
  private _show: boolean;

  @Input() set option(choice: Choice) {
    if (choice) {
      this._show = true;
      this.text = choice.text;
    } else {
      this._show = false;
    }
  }

  get show() {
    return this._show
  }

  ngOnInit() { }

  optionClick() {
    alert('Your choice could have consequences');
  }
}
