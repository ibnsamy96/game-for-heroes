import { Component, OnInit } from '@angular/core';
import { GameLogicService } from "../shared/game-logic.service";
import { Router } from '@angular/router';
import { UserPreferences } from "../shared/created-types.interface";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userPreferences: UserPreferences;

  constructor(private gameLogicService: GameLogicService, private router: Router) {
    this.userPreferences = { userName: "", boxesNumber: "2" };
  }

  ngOnInit(): void {
  }


  startGame() {
    console.log(this.userPreferences);

    this.gameLogicService.setUserPreferences(this.userPreferences)
    this.router.navigate(['game'])

  }
}
