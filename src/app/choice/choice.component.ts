import { Component, Input, OnInit } from '@angular/core';
import { Choice } from './choice';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  private text: string;
  private show: boolean;

  @Input() set option(choice: Choice) {
    if (choice) {
      this.show = true;
      this.text = choice.text;
    } else {
      this.show = false;
    }
  }

  ngOnInit() { }

  optionClick() {
    alert('Your choice could have consequences');
  }
}
