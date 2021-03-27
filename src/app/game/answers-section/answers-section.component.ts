import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { GameLogicService } from "../../shared/game-logic.service";

@Component({
  selector: 'app-answers-section',
  templateUrl: './answers-section.component.html',
  styleUrls: ['./answers-section.component.css']
})
export class AnswersSectionComponent implements OnInit {

  answersCentersLocations: { xCord: number, yCord: number, diameter: number, element: HTMLElement }[] = [];

  constructor(private gameLogicService: GameLogicService, private router: Router, private render: Renderer2) { }

  @Input() answers!: { text: string, state: boolean }[];

  ngOnInit(): void {
    console.log(this.answers);
  }

  addAnswer(centerLocation: { xCord: number, yCord: number, diameter: number, element: HTMLElement }) {
    this.answersCentersLocations.push(centerLocation)
  }

  checkLastChoiceLocation(centerLocation: { xCord: number, yCord: number, diameter: number, element: HTMLElement }): void {

    const chosenAnswerElement = this.answersCentersLocations.find((answerCenterLocation) => {
      const choiceXCenter = centerLocation.xCord
      const choiceYCenter = centerLocation.yCord

      const answerXStart = answerCenterLocation.xCord - (answerCenterLocation.diameter / 2)
      const answerYStart = answerCenterLocation.yCord - (answerCenterLocation.diameter / 2)

      const answerXEnd = answerCenterLocation.xCord + (answerCenterLocation.diameter / 2)
      const answerYEnd = answerCenterLocation.yCord + (answerCenterLocation.diameter / 2)

      return (choiceXCenter > answerXStart && choiceXCenter < answerXEnd) && (choiceYCenter > answerYStart && choiceYCenter < answerYEnd)
    })

    if (chosenAnswerElement) {
      const chosenAnswerText = chosenAnswerElement.element.innerText
      this.gameLogicService.submitAnswer(chosenAnswerText)
      this.router.navigate(['result'])
    }
  }




  lastChosenAnswerCircle: Element | null | undefined;

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



    if (chosenAnswerElement?.element.firstElementChild !== this.lastChosenAnswerCircle) {
      if (this.lastChosenAnswerCircle) {
        this.render.setStyle(this.lastChosenAnswerCircle, 'background-color', 'transparent')
        this.render.setStyle(this.lastChosenAnswerCircle, 'border', '3px solid #79E8D8')
      }
      if (chosenAnswerElement) {
        this.lastChosenAnswerCircle = chosenAnswerElement?.element.firstElementChild
        this.render.setStyle(this.lastChosenAnswerCircle, 'background-color', '#B53A57')
        this.render.setStyle(this.lastChosenAnswerCircle, 'border', '3px solid #B53A57')
        console.log(this.lastChosenAnswerCircle);
      }
    }

  }


}
