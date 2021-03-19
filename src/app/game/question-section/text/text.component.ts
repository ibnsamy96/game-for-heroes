import { Component, Input, OnInit } from '@angular/core';

import { GameLogicService } from "../../../shared/game-logic.service";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {


  @Input() questionText!: string;

  constructor(private gameLogicService: GameLogicService) {
  }

  ngOnInit(): void {
    // this.questionText = this.gameLogicService.getNextQuestion().text
  }

}
