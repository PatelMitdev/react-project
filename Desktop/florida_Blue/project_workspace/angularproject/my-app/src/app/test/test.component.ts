import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
 
  template: `
  <p>
   This is demo Angular applicationa {{myid}}.

  </p>
  <h1 class="text-sucess">My Name is Mit a patel</h1>
  <h2 class="text-danger">My Name is Mit a patel</h2>

  <input [id]="myid" type="text" value="Name">
  <input id="{{myid}}" type="text" value="Name">
  
  <button (click)="onClickMe($event)">Click Me</button>{{ string }}

  
  <button (click) = "string=' Mit A Patel' ">Click Me</button>{{ string }}



  <h2 [ngClass]="messagespecial" >My Name is Parth:</h2>
  <h2 [style.color]=" haserror ? 'red ':' green ' " >Angular 2 Error is here </h2>
   

  <input #myinput type="text">
  <button (click)= "logmessage(myinput.value)">Templete refeence Variable</button>
  
  <input [(ngModel)]="name" type="text">
    {{name}}

  `,
 
styles: [` 
  .text-sucess {
    color:blue
  }
  .text-danger {
    color:red
  }
  `]
})

export class TestComponent implements OnInit {
  public myid="Propert Binding";
  public haserror=false; 
  public isspecial=false;
  public messagespecial={
    "text-sucess" :this.haserror,
    "text-danger" :this.isspecial
  }
  public string=" ";


//  public name="";

  onClickMe(event){
    console.log(event);
    this.string = event.type;
  }
   
  logmessage(value){
    alert("Welcome to the world of Universal:"+value);
    console.log("My Name is Mit:")
  }


  constructor() { }

  ngOnInit() {
  }

}
