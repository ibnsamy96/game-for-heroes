import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameLogicService } from "../shared/game-logic.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  userInfo!: { name: string, result: number }

  constructor(private gameLogicService: GameLogicService, private router: Router) {
    if (!this.gameLogicService.getUserLoginState()) {
      console.log('User with no login! Routing to login page.');
      this.router.navigate([""])
    }
  }

  ngOnInit(): void {
    const userName = this.gameLogicService.getUserName()
    // console.log(this.gameLogicService.getUserName());
    const userResult = this.gameLogicService.getUserResult();
    this.userInfo = { name: userName, result: userResult }
    console.log(this.userInfo);
  }

}
