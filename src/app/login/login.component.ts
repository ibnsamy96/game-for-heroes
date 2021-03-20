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


  constructor(private gameLogicService: GameLogicService, private router: Router) {
  }

  ngOnInit(): void {
  }

  isSelectHasValue: undefined | string;


  startGame(formFields: { userName: string, boxesNumber: string }) {

    const userPreferences: UserPreferences = {
      userName: formFields.userName,
      boxesNumber: parseInt(formFields.boxesNumber.toString())
    }

    this.gameLogicService.setUserPreferences(userPreferences)

    this.router.navigate(['game'])

  }
}
