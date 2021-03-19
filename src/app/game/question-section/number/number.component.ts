import { Component, Input, OnInit } from '@angular/core';

import { GameLogicService } from "../../../shared/game-logic.service";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {



  @Input() questionNumber!: string;

  constructor(private gameLogicService: GameLogicService) {
  }

  ngOnInit(): void {
    // this.questionNumber = this.gameLogicService.getNextQuestion().number
  }

}
