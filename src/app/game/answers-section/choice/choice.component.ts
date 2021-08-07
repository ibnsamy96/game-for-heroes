import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnInit {
  @Input() innerText: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
