import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appLogger]'
})
export class LoggerDirective implements OnInit{
  @Input() message:string;

  ngOnInit(): void {
    console.log(this.message);
  }

  constructor() { }

}
