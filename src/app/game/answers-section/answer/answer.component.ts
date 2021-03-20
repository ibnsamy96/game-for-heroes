import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameLogicService } from "../../../shared/game-logic.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer!: { text: string, state: boolean };

  constructor(private gameLogicService: GameLogicService, private router: Router) { }

  submitAnswer() {
    if (this.answer.state === true) {
      this.gameLogicService.addRightAnswerToResult()
      console.log('3aaaaash!');
    } else {
      console.log('Nooooo!');
    }
    this.router.navigate(['result'])
  }

  ngOnInit(): void {
  }

}
