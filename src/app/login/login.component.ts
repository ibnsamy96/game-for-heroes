import { Component, OnInit } from '@angular/core';
import { GameLogicService } from "../shared/game-logic.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userPreferences: { userName: String, boxesNumber: Number };

  constructor(private gameLogicService: GameLogicService, private router: Router) {
    this.userPreferences = { userName: "", boxesNumber: 0 };
  }

  ngOnInit(): void {
  }


  startGame() {
    this.gameLogicService.setUserPreferences(this.userPreferences)
    this.router.navigate(['game'])

  }
}
