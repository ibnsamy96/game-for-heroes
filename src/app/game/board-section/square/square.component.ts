import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() squareState!: number | boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.squareState);

  }

}
