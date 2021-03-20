import { Component, OnInit } from '@angular/core';
import { GameLogicService } from "../game-logic.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userName!: string;

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.userName = this.gameLogicService.getUserName()
  }

}
