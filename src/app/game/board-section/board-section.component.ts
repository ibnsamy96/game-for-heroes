import { Component, OnInit } from '@angular/core';
import { GameLogicService } from "../../shared/game-logic.service";

@Component({
  selector: 'app-board-section',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.css']
})
export class BoardSectionComponent implements OnInit {

  constructor(private gameLogicService: GameLogicService) { }

  squaresNumber!: number;
  squares!: number[];

  ngOnInit(): void {
    this.squaresNumber = this.gameLogicService.getSquaresNumber()
    this.squares = Array(this.squaresNumber).fill(1)

  }



}
