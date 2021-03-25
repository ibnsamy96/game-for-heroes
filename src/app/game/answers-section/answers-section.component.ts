import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameLogicService } from "../../shared/game-logic.service";

@Component({
  selector: 'app-answers-section',
  templateUrl: './answers-section.component.html',
  styleUrls: ['./answers-section.component.css']
})
export class AnswersSectionComponent implements OnInit {

  answersCentersLocations: { xCord: number, yCord: number, diameter: number, element: HTMLElement }[] = [];

  constructor(private gameLogicService: GameLogicService, private router: Router) { }

  @Input() answers!: { text: string, state: boolean }[];

  ngOnInit(): void {
    console.log(this.answers);
  }

  addAnswer(centerLocation: { xCord: number, yCord: number, diameter: number, element: HTMLElement }) {
    this.answersCentersLocations.push(centerLocation)
  }

  checkChoiceLocation(centerLocation: { xCord: number, yCord: number, diameter: number, element: HTMLElement }): void {

    const chosenAnswerElement = this.answersCentersLocations.find((answerCenterLocation) => {
      const choiceXCenter = centerLocation.xCord
      const choiceYCenter = centerLocation.yCord

      const answerXStart = answerCenterLocation.xCord - (answerCenterLocation.diameter / 2)
      const answerYStart = answerCenterLocation.yCord - (answerCenterLocation.diameter / 2)

      const answerXEnd = answerCenterLocation.xCord + (answerCenterLocation.diameter / 2)
      const answerYEnd = answerCenterLocation.yCord + (answerCenterLocation.diameter / 2)

      return (choiceXCenter > answerXStart && choiceXCenter < answerXEnd) && (choiceYCenter > answerYStart && choiceYCenter < answerYEnd)
    })


    const chosenAnswerText = chosenAnswerElement?.element.innerText

    console.log(chosenAnswerText);

    if (chosenAnswerText) {
      this.gameLogicService.submitAnswer(chosenAnswerText)
      this.router.navigate(['result'])
    }
  }


}
