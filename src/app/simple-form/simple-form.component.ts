import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
   <div>

      <input 
      #myInput 
      type="text" 
      [(ngModel)]="message"
      [ngClass]="{mousedown:isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false"
      />
      <button (click)="update.emit({text:message})">Click Me!</button>
   </div>
  `,
  styles: [`
    :host{
      display:flex;
      flex-direction: column;
    }
    input:focus{
      font-weight:bold;
      outline:none;
    }

    .mousedown{
      border:2px solid #C884FF;
    }
    
    button{

    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  // onClick(event, value){
  //   console.log(event);
  //   console.log(value);

  // }

  constructor() { 
      // setInterval(()=> this.message = Math.random().toString(), 1000);
      //haha
  }

    ngOnInit() {
  }

}
