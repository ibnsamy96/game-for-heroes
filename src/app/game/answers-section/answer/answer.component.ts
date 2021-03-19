import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer!: { text: string, state: boolean };

  constructor() { }

  submitAnswer() {
    if (this.answer.state === true) {
      console.log('3aaaaash!');
    } else {
      console.log('Nooooo!');

    }
  }

  ngOnInit(): void {
  }

}
