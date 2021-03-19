import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {


  gameInfo!: { userName: String; boxesNumber: Number; };


  constructor() { }

  logInfo() {
    console.log(this.gameInfo);
  }
}
