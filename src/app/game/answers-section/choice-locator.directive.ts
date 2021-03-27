import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[choiceLocator]'
})
export class ChoiceLocator implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Output() locationUpdate = new EventEmitter<{ xCord: number, yCord: number, diameter: number, element: HTMLElement }>()

  ngOnInit() {
  }


  @HostListener('cdkDragEnded') locationUpdated() {
    console.log(this.elementRef.nativeElement.getBoundingClientRect());

    const circleLeft = this.elementRef.nativeElement.getBoundingClientRect().left
    const circleTop = this.elementRef.nativeElement.getBoundingClientRect().top
    const circleWidth = this.elementRef.nativeElement.getBoundingClientRect().width
    const circleHeight = this.elementRef.nativeElement.getBoundingClientRect().height

    const centerLocation = { xCord: 0, yCord: 0, diameter: 0, element: this.elementRef.nativeElement };

    console.log(centerLocation);


    centerLocation.xCord = circleLeft + (circleWidth / 2)
    centerLocation.yCord = circleTop + (circleHeight / 2)
    centerLocation.diameter = this.elementRef.nativeElement.getBoundingClientRect().width

    this.locationUpdate.emit(centerLocation)

  }

}
