import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChoiceComponent } from "./choice/choice.component";

@Component({
  selector: 'app-answers-section',
  templateUrl: './answers-section.component.html',
  styleUrls: ['./answers-section.component.css']
})
export class AnswersSectionComponent implements OnInit {

  // @ViewChild('app-choice') appChoice!: ChoiceComponent;


  constructor() { }

  @Input() answers!: { text: string, state: boolean }[];

  ngOnInit(): void {
    console.log(this.answers);
  }

}
