import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers-section',
  templateUrl: './answers-section.component.html',
  styleUrls: ['./answers-section.component.css']
})
export class AnswersSectionComponent implements OnInit {

  constructor() { }

  @Input() answers!: { text: string, state: boolean }[];

  ngOnInit(): void {
    console.log(this.answers);

  }



}
