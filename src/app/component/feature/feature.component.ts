import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {


  featurecare:Array <any>=[
    {
      icon:`<i class="fa-brands fa-linkedin fa-2x"></i>
      `,
      title:`Fully Responsive`,
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."

    },


    {
      icon:`<i class="fa-brands fa-apple fa-2x"></i>`,
      title:"Fully Layered PSD",
      para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`

    },



    {
      icon:`<i class="fa-brands fa-font-awesome fa-2x"></i>`,
      title:"Font Awesome Icons",
      para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`

    },



    
      {
        icon:`<i class="fa-solid fa-code fa-2x"></i>`,
        title:"HTML3 & CSS3 ",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
  
      },
      
        {
          icon:`<i class="fa-solid fa-envelope fa-2x"></i> `,
          title:"Email Template",
          para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    
        },
        {
          icon:`<i class="fa-solid fa-download fa-2x"></i> `,
          title:"Free to download",
          para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    
        }
      
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
