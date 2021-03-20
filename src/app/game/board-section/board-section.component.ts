import { Component, OnInit } from '@angular/core';
import { GameLogicService } from "../../shared/game-logic.service";

@Component({
  selector: 'app-board-section',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.css']
})
export class BoardSectionComponent implements OnInit {

  constructor(private gameLogicService: GameLogicService) { }

  squaresRows!: ((boolean | number)[])[];
  squaresNumber!: number;
  squares!: (boolean | number)[];


  ngOnInit(): void {



    let elementsNumberPerArray: number = 0;

    this.squaresNumber = this.gameLogicService.getSquaresNumber()


    this.squares = Array(this.squaresNumber).fill(false)
    const randomQuestionSquareLocation = Math.floor(Math.random() * this.squaresNumber);
    this.squares[randomQuestionSquareLocation] = 1

    if ([2].includes(this.squaresNumber)) {
      elementsNumberPerArray = 2
    } else if ([6, 9].includes(this.squaresNumber)) {
      elementsNumberPerArray = 3
    } else if ([12].includes(this.squaresNumber)) {
      elementsNumberPerArray = 4
    } else if ([10, 15].includes(this.squaresNumber)) {
      elementsNumberPerArray = 5
    }

    this.squaresRows = this.spliceArray(elementsNumberPerArray, this.squares)

  }


  spliceArray(elementsNumberPerArray: number, oldArray: (boolean | number)[]) {

    const newArray = []

    console.log(oldArray);


    while (oldArray.length > 0) {
      const tempArr = oldArray.filter((value, index) => {
        return index < elementsNumberPerArray
      })
      oldArray.splice(0, elementsNumberPerArray)
      newArray.push(tempArr)
    }

    console.log(newArray);
    return newArray


  }

}
