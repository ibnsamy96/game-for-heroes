import { Component, OnInit } from '@angular/core';

import { GameLogicService } from "../../shared/game-logic.service";

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {

  question!: { number: string, text: string };

  constructor(private gameLogicService: GameLogicService) {
  }

  ngOnInit(): void {
    this.question = this.gameLogicService.getNextQuestion()
  }


}
