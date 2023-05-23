import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspire',
  templateUrl: './inspire.component.html',
  styleUrls: ['./inspire.component.scss']
})
export class InspireComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  iconlistarray:Array <any>=[
    {
      link:'javascript:;',
      icon:`<i class="fa-brands fa-apple fa-2x"></i> `
    },
    {
      link:"javascript:;",
      icon:`<i class="fa-brands fa-android fa-2x"></i> `

    },
    { 
      link:"javascript:;",
      icon:`<i class="fa-solid fa-headphones fa-2x"></i>`

    }
  ]

}
