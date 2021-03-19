import { Component, OnInit } from '@angular/core';
import { GameLogicService } from "../shared/game-logic.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameLogicService: GameLogicService, private router: Router) {
    if (!this.gameLogicService.getUserPreferences()) {
      console.log('User with no login! Routing to login page.');
      this.router.navigate([""])
    }
  }

  ngOnInit(): void {

  }

}
