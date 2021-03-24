import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChoiceComponent } from "./choice/choice.component";

@Component({
  selector: 'app-answers-section',
  templateUrl: './answers-section.component.html',
  styleUrls: ['./answers-section.component.css']
})
export class AnswersSectionComponent implements OnInit {

  @ViewChild('choice') choice: ElementRef;


  constructor(private elRef: ElementRef) { }

  @Input() answers!: { text: string, state: boolean }[];

  ngOnInit(): void {
    console.log(this.answers);
  }

  move(ref: ElementRef) {

    const { x, y } = this.choice.nativeElement.getBoundingClientRect();

    console.log(x, y);
  }

}
