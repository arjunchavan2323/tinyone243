import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
     
  @Input()ulclassname:string="iconlist"
  @Input()iconarray!:Array<any>
  
  constructor() { }

  ngOnInit(): void {
  }


}
