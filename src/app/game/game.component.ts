import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  buttonclick = false;
  interval;
  intervalb;
  constructor() { }

  ngOnInit() {
  }
attack(){
  console.log("attack")
  this.buttonclick = false;

 this.interval= setInterval(()=>{
    this.buttonclick =true
    console.log("attack setinterval")
  //   this.intervalb= setInterval(()=>{
  //   this.buttonclick = false;
  //   console.log("attack setintervalb")
  // },2000);
  // clearInterval(this.intervalb);
  },4000);
}

stopAttack(){
  console.log("attack stop")

clearInterval(this.interval);
}
}
